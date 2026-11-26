let count=0;
function cardCounter(card) {
    if (card >=2 && card <=6){
       count+=1;
    } else if (card >=7 && card <=9) {

    } else if (card === 10 || card ==="J" || card ==="K" || card ==="Q" || card ==="A") {
      count-=1;
      }
    if (count >0){
      return `Current Count:${count}, Bet`; 
    } else {
      return `Current Count:${count}, Hold`;
    } 
}
console.log(cardCounter(2));
console.log(cardCounter(7));
console.log(cardCounter("A"));
