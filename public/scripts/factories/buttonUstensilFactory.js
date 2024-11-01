/**
 * Crée un bouton pour un ustensile.
 * @param {string} datas - Le nom de l'ustensile.
 * @returns {Object} - Un objet contenant l'ustensile et la fonction pour obtenir le DOM du wrapper de l'ustensile.
 */
function buttonUstensilFactory(datas) {
   const ustensil = datas;

   // FACTORY DE LA LISTE DES USTENSILES

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   /**
    * Crée et retourne le DOM du wrapper de l'ustensile.
    * @returns {HTMLElement} - L'élément DOM du wrapper de l'ustensile.
    */
   function getUstensilWrapperDOM() {
      // Création des éléments wrapper option ustensils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      currentOption++;
      wrapperOption.textContent = ustensil;
      wrapperOption.setAttribute("id", "mu" + currentOption);

      return wrapperOption;
   }

   return { ustensil, getUstensilWrapperDOM };
}
