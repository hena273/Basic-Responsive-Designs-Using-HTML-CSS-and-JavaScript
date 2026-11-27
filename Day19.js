const lunches=[]
function addLunchToEnd (lunches,str) {
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`)
    return lunches
}
function addLunchToStart (lunches,str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`)
    return lunches
}
function removeLastLunch(lunches) {
    if (lunches.length === 0){
    console.log("No lunches to remove.")
    } else {
    const lastLunch = lunches.pop();
    console.log(`${lastLunch} removed from the end of the lunch menu.`)
    }
    return lunches
}
function removeFirstLunch(lunches) {
    if (lunches.length === 0){
    console.log("No lunches to remove.")  
    } else {
    const FirstLunch = lunches.shift();
    console.log(`${FirstLunch} removed from the start of the lunch menu.`)
    }
    return lunches
}
function getRandomLunch (lunches) {
  const randomIndex = Math.floor(Math.random() * lunches.length);
  const selectedLunch = lunches[randomIndex];
  if (lunches.length === 0) {
    console.log("No lunches available.")
  } else {
    console.log(`Randomly selected lunch: ${selectedLunch}`)
  }
}
function showLunchMenu (lunches) {
    if (lunches.length === 0) {
      console.log("The menu is empty.")
    } else {
      console.log(`Menu items: ${lunches.join(", ")}`)
    }
}
console.log(addLunchToEnd (lunches,"Grilled Chicken Salad"))
console.log(addLunchToEnd (lunches,"Turkey Sandwich"))
console.log(addLunchToStart (lunches,"Veggie Wrap"))
console.log(addLunchToStart (lunches,"Chicken Caesar Wrap"))    
console.log(removeLastLunch(lunches))
console.log(removeFirstLunch(lunches))
getRandomLunch (lunches)
showLunchMenu (lunches)