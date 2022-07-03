"use strict"

class Bootstraper{
    constructor(){
        this.view = new View();
        this.model = new Model();
        this.controler = new Controler(this.view, this.model);
    }
}
let bootsraper = new Bootstraper();
