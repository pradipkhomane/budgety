budgetController = (function(){
    

})();

UIController = (function(){

    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value'
    } 

    return {
        getInput : function(){

            return {
                type : document.querySelector(DOMStrings.inputType).value,
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            }
        }
    }
})();

controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        var input = UICtrl.getInput();

        console.log(input);
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
