class Popup{
    constructor(content){
        this.overlay = document.createElement('div');
        this.overlay.setAttribute('class', 'overlay');
        

        this.popup = document.createElement('div');
        this.popup.setAttribute('class', 'popup');
        

        this.closeBtn = document.createElement('button');
        this.closeBtn.setAttribute('class', 'closeBtn');
        this.closeBtn.innerText = "X";
        this.closeBtn.addEventListener("click", () => this.hide());

        this.popup.appendChild(this.closeBtn);
        this.popup.appendChild(document.createTextNode(content));


        this.overlay.appendChild(this.popup);


        document.body.appendChild(this.overlay);

        
    }

    show(){
        console.log(this.overlay);
        this.overlay.classList.add('show');
    }

    hide(){

        this.overlay.classList.remove('show');
    }
}