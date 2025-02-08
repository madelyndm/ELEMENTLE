class BlankCell{
  
  constructor(className){
    this.button = document.createElement('button');
    this.button.setAttribute('class', className);
  }


  getButton(){
    return this.button;
  }
}