class Element {
  name;
  row;
  col;
  series;
  status;
  isAnswer;

  constructor(name, row, col, series){
    this.name = name;
    this.row = row;
    this.col = col;
    this.series = series;
    this.status = "not guessed";
    this.isAnswer = false;
  }



  //getter and setters
  get name(){
    return this.name;
  }
  get row(){
    return this.row;
  }
  get col(){
    return this.col;
  }
  get series(){
    return this.series;
  }
  get isAnswer(){
    return this.isAnswer;
  }

  set name(name){
    this.name = name;
  }
  set row(row){
    this.row = row;
  }
  set col(col){
    this.col = col;
  }
  set series(series){
    this.series = series;
  }
  set isAnswer(isAnswer){
    this.isAnswer = isAnswer;
  }
}