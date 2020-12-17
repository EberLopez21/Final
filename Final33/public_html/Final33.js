/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let question= prompt('Do you want to play a game?');
let choices=['1','2','3','4','5','6','7','8','9','10'];

let counter = 0;
let tries = 3;
let randomNumber = (choices[Math.floor(Math.random() * 10 + 1)]);
while (pick !== randomNumber){
    let pick = prompt("Pick a number between 1 and 10" );
    counter = counter + 1;
    if (counter > tries){
        document.write("You ran out of tries left.");
      
    }
    if (pick === randomNumber){
        document.write("Correct!");
        document.write("The number was " + randomNumber);
    }
}
