"use strict"
class Model{
    constructor(){
        this.text = 'Hello mvc';
    }
    getText(){
        return this.text;
    }
    setText(newTxt){
        this.text = newTxt;
    }
}
