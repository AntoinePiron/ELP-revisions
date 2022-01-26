
list = [1, 2, 3,]

for (i=0; i<list.length; i++){
    console.log(list[i])
}
function somme(list){
    return list.reduce((b,f) => b +f)
}

console.log(somme(list))


