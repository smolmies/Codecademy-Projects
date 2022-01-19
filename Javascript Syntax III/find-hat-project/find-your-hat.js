// For now this project is skipped as the level is too high for me right now.

const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    
    constructor(playingField){
      this._playField = playingField;
    }

    print(){
     this._playField.forEach(row => console.log(row.join("")));
    }
    moveInField(direction){
      direction = direction.toLowerCase();
      if(direction.toLowerCase() == "down"){
        let foundRow = 0;
        let foundIndex = 0;
        this._playField.forEach((x, i) =>{
          if(x.indexOf(pathCharacter) > -1){
            foundRow = i;
            foundIndex = x.indexOf(pathCharacter);
          }
        });
        this._playField[foundRow][foundIndex] = fieldCharacter;
        this._playField[foundRow+1][foundIndex] = pathCharacter;
      }
    }
};

const myField = new Field([
  [pathCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, hole],
  [fieldCharacter, fieldCharacter, hat]
]);

myField.print();


// while(){
// let input = prompt("Giev move pls: ");
// myField.moveInField(input);
// myField.print();
// }
