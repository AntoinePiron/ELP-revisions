Promise = require('bluebird');

wait = function(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  }
function boucle(param) {
  return new Promise(function(resolve, reject) {
    i = 0;
    toto = true;
    while(toto) {
      console.log("->", i);
      toto = (++i < 1000 ? true : false) 
    }
    if (param) {
      return reject();
    }   
  })
}

boucle(false).then (function() 
{console.log("terminé")})
.catch(function (res){console.log('Erreur1', res);})

wait(2000)
.then(function() { console.log('Bonjour1');})
.catch(function (res){console.log('Erreur1', res);})
