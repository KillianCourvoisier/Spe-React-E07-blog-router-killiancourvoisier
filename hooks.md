# Les hooks React

Les hooks sont des fonctions (toujours) que je peux utiliser à l'intérieur d'un composant React de type function (uniquement). Par convention, TOUS les hooks ont un nom qui commence par "use...".

## useState

```javascript
import React, { useState } from 'react';
function Example() {
  /* 
    lorsque j'exécute useState()
    Je peux donner à mon state une valeur initiale
    en la mettant en argument de useState
    
    * ça me renvoie un tableau
    * Le premier élément dans ce tableau est mon state
    * Le deuxième est la fonction capable de modifier ce state
    
    Je peux donc destructurer le tableau reçu, et stocker le state
    ainsi que la fonction pour le modifier dans des variables de mon choix
  */
  // Je crée un state qui vaut 0 en valeur initial, et qui s'appelle "count"
  // Si je veux modifier ce state, je dois utiliser la fonction qui vient avec
  // ici je l'ai appelée "setCount"
  const [count, setCount] = useState(0);
  const [prenom, setPrenom] = useState("");
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
```

Ce hook nous permet de rajouter un state à un composant React (de type fonction).

Ce hook possède des similarités avec le state d'une class
  * React va automatiquement surveiller les changements de state
  * Si j'utilise la méthode fournie par react pour modifier mon state -> nouveau rendu des composants
  * La seule façon de passer de la data de composant en composant, c'est toujours via les props
    * Les props ne peuvent toujours être donnés que de parent -> enfant

mais aussi des différences

  * Je peux créer plusieurs states
  * Je peux leur donner les noms que je veux
  * Un state n'est plus FORCÉMENT un objet, je peux mettre n'importe quel type de data