// let input = document.querySelector("#entre1");
// let btnValider = document.querySelector("#Valider");
// let liste = document.querySelector("#liste");

// btnValider.addEventListener("click", () => {
//   let texte = input.value;

//   if (texte === "") return;
//   let para = document.createElement("p");
//   para.textContent = texte;
//   let btnModifier = document.createElement("Button");
//   btnModifier.textContent = "Modifier";
//   btnModifier.addEventListener("click", () => {
//     let newText = prompt(
//       "Veuillez modifier le texte:",
//       para.firstChild.textContent
//     );
//     if (newText !== null) {
//       para.firstChild.textContent = newText;
//     }
//   });
//   let btnSupp = document.createElement("Button");
//   btnSupp.textContent = "Supprimer";
//   btnSupp.addEventListener("click", () => {
//     liste.removeChild(para);
//   });
//   para.appendChild(btnModifier);
//   para.appendChild(btnSupp);
//   liste.appendChild(para);
// });
// Premiere version //