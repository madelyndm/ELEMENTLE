let elementIndex = 0;
let elementObject = new ElementButton("hydrogen", 1, 1, 'reactive-nonmetal', 'h', 1);


//Question popup
const questionContent = "-Guess the element in 10 tries.\n-If your guess is in the same row or column (more accuralty, period or group), that row or column will be highlighted in dark green.\n-Also, if your guess is in the same category as the answer, that category will be highlighted in light green";
const questionPopup = new Popup(questionContent);
document.getElementById('questionBtn').addEventListener("click", () => {
  questionPopup.show();
});

//Table setup
const myHtmlTable = new HtmlTable();
const docTable = myHtmlTable.createHtmlTable();
const mydataTable = new DataTable();
const dataTable = mydataTable.createDataTable();
//myHtmlTable.printHtmlTable();
myHtmlTable.formatHtmlTable(docTable);

//answer setup
const answerIndex = Data.getRandomElement();
const answerName = Data.getElementName(answerIndex);
//console.log(answerIndex);

console.log(answerName);

answer = new ElementButton(answerName, Data.getElementRow(answerIndex),Data.getElementCol(answerIndex), Data.getElementSeries(answerIndex), Data.getElementSymbol(answerIndex), answerIndex);
//console.log(answer.getWeight());


var numGuesses = 0;
let allGuesses = [];





//Check guess function
function checkGuess(element){
  elementIndex = element.getNum();
  elementObject = element;
  if(element.getName() == answer.getName()){
    element.button.classList.add('correct');
    numGuesses++;
    updatePreviousGuesses(element);
    correctAnswer();
  }
  else{
    element.button.classList.add("incorrect");
    element.disabled = true;
    element.button.classList.add("button-disabled");
    numGuesses ++;
    updatePreviousGuesses(element);
    checkGameOver();
    checkSeries(element);
    checkRow(element);
    checkCol(element);
    
  }

  if(numGuesses==1){
    for(let h=0; h<3; h++){
      hint = document.getElementById("hintButton"+h);
      hint.disabled = false;
      hint.classList.remove('hint-button-disabled');
    }  
  }
 
}

//Check num Guesses
function checkGameOver(){
  if(numGuesses == 8){
    const result = document.querySelector('.result');
    const reveal = document.querySelector('.reveal');
    
    const loseText = "Game Over\nThe correct answer was " + answer.getName().toUpperCase()+"\n\n Your guesses were: \n" + allGuesses;
    const losePopup = new Popup(loseText);
    losePopup.show();

    result.textContent = "Game Over"
    reveal.textContent = "The correct answer was " + answer.getName().toUpperCase();
    
   
    gameOver();
  }
}

//Update the previous guesses header info
function updatePreviousGuesses(element){
  const previousGuesses = document.querySelector('.previous-guesses');
  elementName = element.getName();
  if(numGuesses>1){
    allGuesses += ', ' + elementName[0].toUpperCase() + elementName.slice(1);
  }
  else{
    allGuesses += elementName[0].toUpperCase() + elementName.slice(1);
  }
  previousGuesses.textContent = "Previous Guesses (" + numGuesses + "/8): "+allGuesses; 
}

//Print "Congrats!"
function correctAnswer(){
  const winText = "Congratulations!!! You guessed the correct element in " + numGuesses + " guesses!";
  const winPopup = new Popup(winText);
  winPopup.show();
  gameOver();
  // const result = document.querySelector(".result");1
  // result.textContent = "Congratulations!!! You guessed the correct element in " + numGuesses + " guesses!";
  // gameOver();

}

//Disable buttons
function gameOver(){
  for(let i = 0; i < docTable.length; i++){
    for(let j = 0; j < docTable[i].length; j++){
      let cell = docTable[i][j];
      if(cell instanceof ElementButton){
        cellButton = document.getElementById(cell.getName());
        cellButton.disabled = true;
        cellButton.classList.add("button-disabled");
      }
    }
  }
 
  for(let h=0; h<3; h++){
    hint = document.getElementById("hintButton"+h);
    hint.disabled = true;
    hint.classList.add('button-disabled');
  }
  
}

//change style of all buttons in series if correct series guessed
function checkSeries(element){
  let series = element.getSeries();
  if(series == answer.getSeries()){
    for(i=0; i<dataTable.length; i++){
      for(j=0; j<dataTable[i].length; j++){
        let compared = dataTable[i][j];
        if(compared instanceof ElementButton){
          if(compared.getSeries() == series){
            comparedButton = document.getElementById(compared.getName());
            comparedButton.classList.add('correctSeries');
          }
        }
        
        }
      }
    }
  }

//change style of all buttons in column if correct column guessed
function checkCol(element){
  let col = element.getCol();
  //console.log(col);
  //console.log(answer.getCol());
  if(col == answer.getCol()){
    for(i = 0; i<docTable.length; i++){
      for(j = 0; j<docTable[i].length; j++){
        let compared = docTable[i][j];
        if(compared instanceof ElementButton){
          if(compared.getCol() == col){
            comparedButton = document.getElementById(compared.getName());
            comparedButton.classList.add('closePos');
          }
        }
      }
    }
    sameNumber = document.getElementById("col-is-"+(col+1));
    sameNumber.classList.add("correctNumCell");
  }
}


//change style of all buttons in row if correct row guessed
function checkRow(element){
  let row = element.getRow();
  //console.log(row);
  //console.log(answer.getRow());
  if(row == answer.getRow()){
    for(i = 0; i<docTable.length; i++){
      for(j = 0; j<docTable[i].length; j++){
        let compared = docTable[i][j];
        if(compared instanceof ElementButton){
          if(compared.getRow() == row){
            comparedButton = document.getElementById(compared.getName());
            comparedButton.classList.add('closePos');
          }
        }
      }
    }
    
    sameNumber = document.getElementById("row-is-"+(row+1));
    
    sameNumber.classList.add("correctNumCell");
    
  }
}

//Hint function
function runHint(hintButton){
  if(numGuesses>0 && numGuesses<10){
    let highLow = 'null';
    answerWeight = Data.getElementWeight(answerIndex);
    elementWeight = Data.getElementWeight(elementIndex-1);
    element = document.getElementById(elementObject.getName());
   
    if(answerWeight >= elementWeight){
      highLow = 'greater than'
    }
    else if(answerWeight < elementWeight){
      highLow = 'less than';
    }
    var div = document.getElementById("hintDiv");
    var p = document.createElement('p');
    p.setAttribute("class", "hintArea");
    p.textContent = "Hint: The correct element's atomic weight is "+highLow+" the atomic weight of "+ elementObject.getName().toUpperCase();
    div.appendChild(p);

    hintButton.toggleDisable(true);
  }

}



//help button
// helpButton.addEventListener("click", function (){
//   helpPopup.classList.add("show");
// });
// window.addEventListener("click", function(event) {
//   if(event.target == helpPopup){
//     helpPopup.classList.remove("show");
//   }
// }
// );
