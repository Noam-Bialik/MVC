"use strict"
class View{
    constructor(){
        this.app = this.getElement('#root');
        this.form = this.createElement('form');
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';
        this.form.append( this.submitButton);
        this.app.append(this.form);
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
    
        if (className) element.classList.add(className)
    
        return element
      }
    
      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }

      bindButton(handler){
        this.form.addEventListener('submit', event =>{
            console.log("bottun clicked");
            event.preventDefault();
            handler();
      });
      }

      writeMessage(text){
        let title = this.createElement('h1');
        title.textContent = text;
        this.form.append(title);
      }
}

