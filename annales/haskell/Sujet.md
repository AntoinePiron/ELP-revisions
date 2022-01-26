# Haskell

Quand cela est nécessaire répondez dans votre fichier par des commentaires (`{- ... reponse ... -}`). 

1. Codez une fonction `if' :: Bool -> p -> p -> p` qui prend en entrée une condition et deux expressions et retourne en sortie la première (respectivement la deuxième) expression si la condition est vraie (respectivement est fausse). Grâce à quel principe l'expression non retournée ne sera pas évaluée ? Donnez trois façons habituelles d'opérer un choix sans avoir à utiliser une telle fonction. 

2. Codez une fonction récursive `getAt :: Int -> [a] -> a` qui prend en entrée un indice, une liste et retourne l'élément de la liste se trouvant à cet indice. L'appel `getAt 0 "azerty"` retourne `'a'`, l'appel `getAt 4 "azerty"` retourne `'t'`. (Vous pouvez ignorer les cas particuliers). 

3. Soit le type `data Tree a = Tree a [Tree a]`. 

  - Expliquez ce que représente `a`. 
  - Expliquez ce que représente chacune des trois occurences du nom `Tree`. 
  - Expliquez finalement ce que représente le type défini. 

4. Définissez un type `Entry` représentant ce genre de données 
```
 { "Nobody06",
   author = "Nobody Jr",
   title = "My Article",
   year = 2006 }
```
toujours structurées en quatre champs (le premier étant une clé). Ensuite, codez une fonction `hasKey :: String -> [Entry] -> Bool` indiquant si une clé donnée se trouve dans une liste d'entrées bibliographiques ou non. 
