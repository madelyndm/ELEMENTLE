class DataTable{
  rows = 7;
  dataTable = [];

  
  constructor(){
    this.dataTable = this.createDataTable();
  }
  createDataTable(){
    let table = [];
    let count = 0; 

    for(let i = 0; i < this.rows; i++){
      table.push([]);
      let cols = Data.numInRows[i];
      for(let j = 1; j <= cols; j++){

          table[i].push(new ElementButton(Data.getElementName(count),i,j, Data.getElementSeries(count),     Data.getElementSymbol(count)));
          count++;
        
      }
    }
    return table;
  }

  
  getDataTable(){
    return this.table;
  }
  getDataCell(row, col){
    return this.table[row][col];
  }
  setDataCell(row, col, value){
    this.table[row][col] = value;
  }

  printDataTable(){
    console.log(this.createDataTable());
    for(let i = 0; i < this.rows; i++){
      let cols = Data.numInRows[i];
      for(let j = 0; j<cols; j++){
        let table = this.createDataTable();
        console.log(table[i][j]);
      }
    }
  }
}