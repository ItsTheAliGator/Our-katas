function spinWords(string){
    var stringArray = string.split(' ')
    for (var i = 0; i<stringArray.length;i++){
if(stringArray[i].length>=5)
stringArray[i] = stringArray[i].split('').reverse().join('')
    }
    console.log(stringArray.join(' '))
    return stringArray.join(' ')
   }


//we will comback to this version later
  /* function spinWords(string){
    var stringArray = string.split(' ').filter(x => x.length>=5)
        x.split('').reverse().join(''))
   
    console.log(stringArray)
    return stringArray
   }
   */