function duplicateCount(text){
const textArray =text.toLowerCase().split('')
const TheMap = new Map()
textArray.map(x => {
    if (TheMap.has(x)){
        TheMap.set(x,TheMap.get(x)+1)
    }else{TheMap.set(x,1)}
})
var theCounter = 0
TheMap.forEach(function(value,key) {
    if(value>1)
    theCounter++
})
console.log(TheMap)
return theCounter

  }
   

  /*
  function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
*/