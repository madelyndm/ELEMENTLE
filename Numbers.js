class Numbers{


  constructor(num, type){
    const numString = type+"-is-"+ num;
    this.button = document.createElement('button');
    this.button.setAttribute('class', type);
    this.button.textContent = num;
    this.button.setAttribute('id', numString);
  }


  getButton(){
    return this.button;
  }

  getNum(){
    return this.num;
  }
  getNumString(){
    return "number is "+ num.toString();
  }

}

