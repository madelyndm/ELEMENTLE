

class HtmlTable{
  rows = 7;
  cols = 18;
  dataTable = [];
  htmlTable = [];
  numArray = [];


  constructor(){
    const tableData = this.createHtmlTable();
    //this.htmlTable = this.formatHtmlTable(tableData);
  }

  createHtmlTable(){
    let table = [];
    let count = 0; 
    let row = 0;
    

    for(let i = 0; i < this.rows; i++){
      table.push([]);
      
      for(let j = 0; j < this.cols; j++){
      
        
        if(i==0 && j>1 && j<=11){
          table[i].push(new BlankCell('blank'));
        }
        else if(i==0 && (j==1 || (j>11 && j<17))){
          //numberCell = new Numbers
          table[i].push(new Numbers(j+1, 'col'));
          //this.numArray.push()
        }
        else if(j>1 && j<12 && i == 1){
          table[i].push(new BlankCell('blank'));
        }
        
        else if(j>1 && j<12 && i==2){
            table[i].push(new Numbers(j+1, 'col'));
        }

        
        else{
          
          if(count>56 && count<=70){
            count = 71;
          }
          if(count>88 && count<=102){
            count = 103
          }

          
          if(count == 56){
            table[i].push(new ElementButton("Lanthanoids", i, j, "lanthanoids", "La", count));
            count++;
          }
          else if(count ==88){
            table[i].push(new ElementButton("Actinoids", i, j, "actinoids", "Ac", count));
            count++;
          }
          else {
             table[i].push(new ElementButton(Data.getElementName(count),i,j, Data.getElementSeries(count), Data.getElementSymbol(count), count));
            count++;
          }
        
        }
      }
      row ++;
    }
    table.push([]);
    for(let k = 0; k < 18; k++){
      table[row].push(new BlankCell('spacer'));
    }
    row++

    table.push([]);
    for(let k = 0; k < 2; k++){
      table[row].push(new BlankCell('blank'));
    }
    
    count = 56;
    for(let l = 0; l < 15; l++){
      table[row].push(new ElementButton(Data.getElementName(count),5,2, Data.getElementSeries(count),     Data.getElementSymbol(count), count));
      count++;
    }
    table.push([]);
    for(let k = 0; k < 2; k++){
      table[row].push(new BlankCell('blank'));
    }
    row++;

    table.push([]);
    for(let k = 0; k < 2; k++){
      table[row].push(new BlankCell('blank'));
    }

    count = 88;
    for(let l = 0; l < 15; l++){
      table[row].push(new ElementButton(Data.getElementName(count),6,2, Data.getElementSeries(count),     Data.getElementSymbol(count), count));
      count++;
    }
    table.push([]);
    for(let k = 0; k < 2; k++){
      table[row].push(new BlankCell('blank'));
    }

    

   return table;
  }

  formatHtmlTable(tableData){
    let table = document.createElement('table');


    const firstNumRow = document.createElement('tr');
    const blankCell = new BlankCell("half-spacer");
    const cell = blankCell.getButton();
    firstNumRow.appendChild(cell);
    for(let k = 0; k<18; k++){
      if(k==0 || k==17){
        const numCell = new Numbers(k+1, "col");
        const cell = numCell.getButton();
        firstNumRow.appendChild(cell);
      }
      else{
        const blankCell = new BlankCell('spacer');
        const cell = blankCell.getButton();
        firstNumRow.appendChild(cell);
      }
    }
    table.appendChild(firstNumRow);
    
    for (let i=0; i<tableData.length; i++){
      const row = document.createElement('tr');
      if(i<7){
        const numberCell = new Numbers(i+1, 'row');
        const numCell = numberCell.getButton();
        row.appendChild(numCell);
      }
      
        for (let j = 0; j<tableData[i].length; j++){
          const cell = tableData[i][j].getButton();
          row.appendChild(cell);
          
        }
      table.appendChild(row);
    }

    const blankRow = document.createElement('tr');
    for(let n=0; n<tableData.length; n++){
      const blankCell = new BlankCell("spacer");
      const cell = blankCell.getButton();
      blankRow.appendChild(cell);
    }
    table.appendChild(blankRow);



    const hintRow = document.createElement('tr');
    for(let n=0; n<7; n++){
      const blankCell = new BlankCell("blank");
      const cell = blankCell.getButton();
      hintRow.appendChild(cell);
    }
    

    for(let h=0; h<3; h++){
      const hintCell = new Hint(h);
      const cell = hintCell.getButton();
      hintRow.appendChild(cell);
    }
    table.appendChild(hintRow);

    document.body.appendChild(table);


    const lanthanoids = tableData[5][2].getButton();
  
    lanthanoids.disabled = true;
    lanthanoids.classList.add("button-disabled");

    const actinoids = tableData[6][2].getButton();
    actinoids.disabled = true;
    actinoids.classList.add("button-disabled");



  }
    



  getHtmlTable(){
    return this.htmlTable;
  }
  getHtmlCell(row, col){
    return this.htmlTable[row][col];
  }
  getHtmlCellByName(name){
    let table = this.createHtmlTable();
    for(let i = 0; i < table.length; i++){
      for(let j = 0; j < table[i].length; j++){
        let cell = table[i][j];
        if(cell.name == name){
          return cell;
        }
      }
    }
  }
  addHtmlTable(){
   document.body.appendChild(this.htmlTable)
  }

  printHtmlTable(){
    let table = this.createHtmlTable();
    for(let i = 0; i < table.length; i++){
      let cols = Data.numInRows[i];
      for(let j = 0; j<table[i].length; j++){
        
        console.log(table[i][j]);
      }
    }
  }

}
