/**
 * Crée un bouton pour un appareil.
 * @param {string} datas - Le nom de l'appareil.
 * @returns {Object} - Un objet contenant l'appareil et la fonction pour obtenir le DOM du wrapper de l'appareil.
 */
function buttonApplianceFactory(datas) {
   const appliance = datas;

   // FACTORY DE LA LISTE DES APPAREILS

   // Initialisation d'un compteur afin de créer les id
   let currentOption = 0;

   /**
    * Crée et retourne le DOM du wrapper de l'appareil.
    * @returns {HTMLElement} - L'élément DOM du wrapper de l'appareil.
    */
   function getAppareilWrapperDOM() {
      // Création des éléments wrapper option appareils (li)
      const wrapperOption = document.createElement("li");
      wrapperOption.className = "wrapper__option";
      currentOption++;
      wrapperOption.textContent = appliance;
      wrapperOption.setAttribute("id", "ma" + currentOption);

      return wrapperOption;
   }

   return { appliance, getAppareilWrapperDOM };
}
