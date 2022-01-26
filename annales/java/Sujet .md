# Java

1. Ecrivez une classe exécutable qui, pour un fichier donné en argument, concatène chacune de ses lignes de texte en une seule chaîne de caractères. Gérez les exceptions `ArrayIndexOutOfBoundsException`, `FileNotFoundException`, `IOException` (et plus si nécessaire) de manière à ce que votre programme ne s'arrête pas subitement si une exception est levée. 

2. Testez avec le [fichier joint](sample-article.json) qui contient une liste de références bibliographiques au format BIBJSON (mais vous n'avez rien besoin de connaître à propos de ce format). 

3. Vous devez maintenant remplir un tableau associant chaque référence bibliographique de la liste à son champs `id`. Pour extraire chaque référence bibliographique et ses champs, vous allez utiliser la librairie gson contenue dans le [JAR fourni](gson-2.8.6.jar). 
Dans le [package com.google.gson](https://www.javadoc.io/doc/com.google.code.gson/gson/latest/com.google.gson/com/google/gson/package-summary.html), se trouvent notamment les classes `Gson`, et `JsonElement`. Vous pouvez obtenir un objet de type `JsonElement` à partir d'une variable `s` de type `String` avec le code suivant : 
```java
Gson gson = new Gson(); // Creates new instance of Gson
JsonElement element = gson.fromJson(s, JsonElement.class); //Converts the json string to JsonElement 
```
Un objet de type `JsonElement` peut ensuite fournir une instance de `JsonArray` à l'aide de `getAsJsonArray()` s'il représente une liste ou une instance de `JsonObject` à l'aide de `getAsJsonObject()` s'il représente un dictionnaire. 
Note : une fois le [JAR](gson-2.8.6.jar) présent dans votre répertoire, vous pouvez compiler en ajoutant le JAR au *class path* (`javac -cp gson-2.8.6.jar VOTRE_CLASSE.java`), puis exécutez en ajoutant aussi le JAR au *class path* **en plus du répertoire courant** (`java -cp gson-2.8.6.jar:. VOTRE_CLASSE`).
  
4. Affichez sur la sortie standard l'ensemble des clés du tableau associatif obtenu à la question précédente. Si vous n'êtes pas parvenu à réaliser l'étape précédente, vous pouvez remplir un tableau associatif par des données quelconques. 

5. Directement dans votre fichier, en commentaire, expliquez ce qu'est le champs `class` et à quoi sert le deuxième paramètre de la méthode `fromJson`. 
