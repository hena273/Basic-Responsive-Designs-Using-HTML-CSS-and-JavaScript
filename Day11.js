const fortune1="Henok"
const fortune2="Nahom"
const fortune3="Meron"
const fortune4="Kidus"
const fortune5="Behager"

const randomNumber=Math.floor(Math.random()*5 + 1)
let selectedFortune;
if (randomNumber === 1){
  selectedFortune=fortune1
}else if (randomNumber === 2) {
  selectedFortune=fortune2
}else if (randomNumber === 3) {
  selectedFortune=fortune3
}else if (randomNumber === 4) {
  selectedFortune=fortune4
}else {
  selectedFortune=fortune5
}
console.log(selectedFortune)
