function DNAStrand(dna){
    return dna.split('').map(reverseLetter).join('')
  }

  function reverseLetter(x) {
      if (x=='A')
      return 'T'
      else if (x=='T')
      return 'A'
      else if (x=='C')
      return 'G'
      else return 'C'
  }