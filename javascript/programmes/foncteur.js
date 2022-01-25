
function multiplie(a,b){
    
    return a*b;
}

var multiplieur = function(a){
    return function(a) {return multiplie(a)

    }
}

console.log(multiplieur(5))