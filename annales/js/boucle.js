function boucle (i) {
    console.log("->", i);
    ++i < 1000 ? boucle(i) : boucle(0)
  }
  
  boucle(0) 