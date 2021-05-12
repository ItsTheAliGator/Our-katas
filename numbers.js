function createPhoneNumber(numbers){
    var sortedArray = numbers.slice(0,3)
    console.log(sortedArray)
    var formatedString = '('+sortedArray.join('')+')'
    sortedArray = numbers.slice(3,6)
    formatedString += ' '+sortedArray.join('')+'-'
    sortedArray = numbers.slice(6,11)
    formatedString += sortedArray.join('')
return formatedString
  }