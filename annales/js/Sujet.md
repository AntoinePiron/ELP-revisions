Répondez directement dans ce document et sauvegardez le fichier.

**1 Questions de cours sur les langages (2pts)**
> Donnez 2 traits caractéristiques d'un langage functionnel (1 pt)
  données non modifiables
  les instructions peuvent être exécutées dans n’importe quel ordre.
> Donnez 3 traits caractéristiques d'une langage objet (1 pt)
  données modifiables
  les instructions doivent être exécutées dans un ordre particulier.
  les boucles sont utilisées pour les données itératives


**2 Questions de cours sur javascript (2pts)**
> Ecrivez une fonction qui affiche tous les élements du tableau [1, 2, 3](1 pt)
> Ecrivez une fonction reduce qui effectue la somme des élements du tableau suivant [1, 2, 3](1 pt)

**3 Debuggage de code (3 pts)**
```javascript
function boucle(param) {
  Promise = require('bluebird');
  return new Promise(function(resolve, reject) {
    i = 0;
    toto = true;
    while(toto) {
      console.log("->", i);
      toto = (++i < 1000 ? true : false) 
    }
    if (param) {
      return reject()
    }
  })
}

boucle(false)
.then (function() {
  console.log("terminé")
})
wait(2000).then(function() { console.log('Bonjour1');}).catch(function (res){console.log('Erreur1', res);})
```

La fonction boucle devrait se comporter comme une promesse, mais il semble que ce ne soit pas le cas. 

> Pourquoi peut-on dire qu'elle ne se comporte pas comme une promesse ? (1 pt)
  il manque un promise require au debut 
> Corrigez pour que le code d'invocation de la boucle fonctionne (1 pt)
> Que faut-il ajouter pour que je puisse invoquer boucle avec le paramètre à `true` ?  (1 pt)

**4 Event Queue (3pts)**
Corrigez ce code pour qu'il s'exécute infiniment sans erreur.
-> 0 .... -> 999 -> 0 .... -> 999 -> 0 ......

````javascript
function boucle (i) {
  console.log("->", i);
  ++i < 1000 ? boucle(i) : boucle(0)
}

boucle(0)
```

