/**
 * Crée un bouton pour un ingrédient.
 * @param {string} datas - Le nom de l'ingrédient.
 * @returns {Object} - Un objet contenant l'ingrédient et la fonction pour obtenir le DOM du wrapper de l'ingrédient.
 */
function buttonIngredientFactory(datas) {
   const ingredient = datas;

   // FACTORY DE LA LISTE DES INGREDIENTS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   /**
    * Crée et retourne le DOM du wrapper de l'ingrédient.
    * @returns {HTMLElement} - L'élément DOM du wrapper de l'ingrédient.
    */
   function getIngredientWrapperDOM() {
      // Création des éléments wrapper option ingrédients (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      currentOption++;
      wrapperOption.textContent = ingredient;
      wrapperOption.setAttribute("id", "mi" + currentOption);

      return wrapperOption;
   }

   return { ingredient, getIngredientWrapperDOM };
}
