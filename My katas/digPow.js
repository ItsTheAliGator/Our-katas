function digPow(n, p){
var sumOfDigits = n.toString().split('').map(x=> Math.pow(Number(x),p++)).reduce((acc,x)=> acc+x)
if (sumOfDigits%n===0){
    return (sumOfDigits/n)
}else{return -1}
console.log(sumOfDigits) 
}