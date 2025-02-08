class ElementButton extends Element{

  symbol;
  element;
  num;
  weight;
  
  constructor(name, row, col, series, symbol, num){
    super(name, row, col, series);
    this.num = num +1;
    this.symbol = symbol;
    this.name = name;
    this.row = row;
    this.col = col;
    this.series = series;

    this.weight = Data.getElementWeight(this.num - 1);
    
    this.addButton();
    this.button.addEventListener('click', () => {
      checkGuess(this);
    })
  }
  
  addButton(){
    const button = 
      document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('id', this.name);
      button.classList.add('element-button');
      button.classList.add(super.series);


      if(!(this.name == "Lanthanoids" || this.name == "Actinoids")){
        //atomic number text
        const numText = document.createElement('div');
        numText.classList.add("numText");
        numText.textContent = this.num.toString();
        button.appendChild(numText);
      }
      //element symbol text

      const symbolText = document.createElement('div');
      symbolText.classList.add("symbolText");
      symbolText.textContent = this.symbol;
      button.appendChild(symbolText);

      //name text
      const nameText = document.createElement("div");
      nameText.classList.add("nameText");
      nameText.textContent = this.name.charAt(0).toUpperCase() + this.name.slice(1);
      button.appendChild(nameText);
      

      if(!(this.name == "Lanthanoids" || this.name == "Actinoids")){
        const weightText = document.createElement('div');
      weightText.classList.add("weightText");
      weightText.textContent = this.weight;
      button.appendChild(weightText);
      }
      //atomic weight text
      
      

      this.button = button;
      
  }

  getButton(){
    return this.button;
  }

  getName(){
    return this.name;
  }

  getSeries(){
    return this.series;
  }

  getCol(){
    return this.col;
  }

  getRow(){
    return this.row;
  }

  getNum(){
    return this.num;
  }

  getWeight(){
    return this.weight;
  }
}



