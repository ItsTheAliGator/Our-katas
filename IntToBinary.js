var countBits = function(n) {
    if (n>=0){
    return n.toString(2).split('').filter(x => x==1).length
}else{throw "INT is negetive " }
  };