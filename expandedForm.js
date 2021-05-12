function expandedForm(num) {
    return String(num).split('').map((x,i,arr)=> x+(('0').repeat(arr.length-i-1))).filter(x=> Number(x)>0).join(' + ')
  }