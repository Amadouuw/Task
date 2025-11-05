// selectionne le champ saisie (la où on ecrit le texte)
let input = document.querySelector("#entre1");

// on selectionne le bouton Valider
let boutonValider = document.querySelector("#Valider");

// on selectionne le conteneur ou le texte vont apparaitre
let liste = document.querySelector("#liste");

// on dit au bouton Valider quoi faire quand on clique dessus

boutonValider.addEventListener("click", () => {
  // on recupere le texte que j'ai écrit dans le champ (entre1 qui est input mtn)
  let texte = input.value;

  // si le champ est vide (rien est ecrit) on arrete ici
  if (texte === "") return;

  // creation  paragraphe contenant le texte
  // on cree un nouvel element HTML type paragraphe
  let item = document.createElement("p");

  // on place le texte saisi à l’interieur du paragraphe
  item.textContent = texte;

  // creation du bouton Modifier avec le createElement
  // On crée un bouton HTML
  let boutonModif = document.createElement("button");

  // on lui donne le texte Modifier
  boutonModif.textContent = "Modifier";

  // on dit ce qui se passe quand on clique sur ce bouton
  boutonModif.onclick = () => {
    // La fonction prompt() affiche une petite fenêtre
    // ou l’utilisateur peut ecrire le nouveau texte
    // on propose le texte actuel comme valeur par défaut
    let nouveauTexte = prompt(
      "Modifier le texte :",
      item.firstChild.textContent
    );
    if (nouveauTexte !== null) {
      // on remplace l’ancien texte par le nouveau
      item.firstChild.textContent = nouveauTexte;
    }
  };

  // creation du bouton Supprimer

  // on cree un deuxième bouton HTML
  let boutonSuppr = document.createElement("button");

  // on lui donne le texte "Supprimer"
  boutonSuppr.textContent = "Supprimer";

  // quand on clique sur ce bouton on supprime element complet
  boutonSuppr.onclick = () => {
    // on retire le paragraphe de la liste div #liste
    liste.removeChild(item);
  };

  // on assemble les element

  // on ajoute le bouton "Modifier" a cote du texte
  item.appendChild(boutonModif);

  // on ajoute ensuite le bouton "Supprimer"
  item.appendChild(boutonSuppr);

  // on ajoute enfin le paragraphe complet texte et bouton
  // a l’interieur du conteneur principal #liste
  liste.appendChild(item);
  // on vide le champ de texte pour permettre une nouvelle entree
  input.value = "";
});
