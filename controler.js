"use strict"

class Controler{
    constructor(view, model){
        this.view = view;
        this.model = model;

        this.view.bindButton(this.handleOnBottunClicked);
    }
    
    handleOnBottunClicked = () => {
        console.log("handleOnBottunClicked");
        this.view.writeMessage(this.model.getText());
    }
}

