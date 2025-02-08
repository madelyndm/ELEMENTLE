class Hint{
  

  constructor(num){
    this.button = document.createElement('button');
    this.button.classList.add('hint', 'hint-button-disabled');
    this.button.setAttribute('id', 'hintButton'+num);
    this.button.textContent = "Hint";
    this.disabled = true;
    
  

    this.button.addEventListener('click', () =>{
      runHint(this);
      this.toggleDisable(true);
    })
    
  }


  getButton(){
    return this.button;
  }

  getHintUsed(){
    return this.hintUsed;
  }

  toggleDisable(hintUsed){
    if(hintUsed = false){
      this.button.disabled = false;
      this.button.classList.remove("hint-button-disabled");
    }
    else{
      this.button.disabled = true;
      this.button.classList.add('hint-button-disabled');
      
    }
  }
}