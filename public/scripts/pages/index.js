// Fonction de création des recettes
async function displayData(recipes) {
   const cardColsSection = document.querySelector(".cardsCols");

   // Je trie par ordre alphabétique
   recipes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
         return -1;
      }
      if (nameA > nameB) {
         return 1;
      }
      return 0;
   });

   // Je génère chaque recette
   recipes.forEach((recipe) => {
      const recipeModel = recetteCardFactory(recipe);
      const recipeCardDOM = recipeModel.getRecetteCardDOM();
      cardColsSection.appendChild(recipeCardDOM);
   });
}

// Fonction de création du bouton ingrédient
async function displayButtonIngredient(recipes) {
   // Je modifie le tableau d'objets ingrédients afin de supprimer les doublons
   const arrayIngredients = recipes.map((recipe) => recipe.ingredients).flat(); // Je concatène les objets
   const arrayIngredientsLowerCase = arrayIngredients.map((item) => item.ingredient.toLowerCase()); // Je mets tout en minuscules
   const uniqueIngredients = Array.from(new Set(arrayIngredientsLowerCase)); // Je supprime les doublons
   const uniqueIngredientsSort = uniqueIngredients.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ingrédient
   uniqueIngredientsSort.forEach((ingredient) => {
      const wrapperListIngredient = document.querySelector(".wrapper__list--ingredient");
      const ingredientWrapperModel = buttonIngredientFactory(ingredient);
      const ingredientWrapperCardDOM = ingredientWrapperModel.getIngredientWrapperDOM();
      wrapperListIngredient.appendChild(ingredientWrapperCardDOM);
   });
}

// Fonction de création du bouton appareil
async function displayButtonAppliance(recipes) {
   // Je modifie le tableau d'objets appareil afin de supprimer les doublons
   const arrayOfArraysAppliances = recipes.map((recipe) => recipe.appliance.toLowerCase()); // Je crée un nouveau tableau avec les appareils et je mets tout en miniscules : Array(50) [ "Blender", "Saladier", "Cocotte", "Cuiseur de riz", "Four", "Four", "Four", "Four", "Saladier", "Four", … ]
   const uniqueAppliances = Array.from(new Set(arrayOfArraysAppliances)); // Je supprime les doublons : Array(11) [ "blender", "saladier", "cocotte", "cuiseur de riz", "four", "casserole", "poêle à crêpe", "sauteuse", "mixer", "poêle", … ]
   const uniqueAppliancesSort = uniqueAppliances.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque appareil
   uniqueAppliancesSort.forEach((appliance) => {
      const wrapperHiddenAppareil = document.querySelector(".wrapper__list--appareil");
      const appareilWrapperModel = buttonApplianceFactory(appliance);
      const appareilWrapperCardDOM = appareilWrapperModel.getAppareilWrapperDOM();
      wrapperHiddenAppareil.appendChild(appareilWrapperCardDOM);
   });
}

// Fonction de création du bouton ustensile
async function displayButtonUstensil(recipes) {
   // Je modifie le tableau d'objets ustensils afin de supprimer les doublons
   const arrayOfArraysUstensils = recipes.map((recipe) => recipe.ustensils); // Je crée un nouveau tableau avec les ustensils : Array(50) [ (3) […], (1) […], (1) […], (2) […], (3) […], (3) […], (2) […], (2) […], (2) […], (3) […], … ]

   let arrayValueUstensils = []; // J'initialise mon tableau
   for (const [key, value] of Object.entries(arrayOfArraysUstensils)) {
      // Je récupère les valeurs du tableau arrayOfArraysUstensils
      const ustensil = `${value}`;
      arrayValueUstensils.push(ustensil); // Je stocke les valeurs dans mon tableau arrayValueUstensils : Array(50) [ "cuillère à Soupe,verres,presse citron", "presse citron", "couteau", "saladier,passoire", "moule à tarte,râpe à fromage,couteau", "moule à tarte,saladier,fourchette", "moule à tartelettes (6),casserole", "moule à gateaux,casserole", "cuillère en bois,couteau", "plat à gratin,couteau,Économe", … ]
   }
   const arrayUstensils = arrayValueUstensils.join(",").split(","); // Je supprime les virgules pour que chaque ustensile soit un élément du tableau : Array(122) [ "cuillère à Soupe", "verres", "presse citron", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "couteau", … ]
   const arrayUstensilsLowerCase = arrayUstensils.map((recipe) => recipe.toLowerCase()); // Je mets tout en minuscules
   const uniqueUstensils = Array.from(new Set(arrayUstensilsLowerCase)); // Je supprime les doublons : Array(25) [ "cuillère à soupe", "verres", "presse citron", "couteau", "saladier", "passoire", "moule à tarte", "râpe à fromage", "fourchette", "moule à tartelettes (6)", … ]
   const uniqueUstensilsSort = uniqueUstensils.sort((a, b) => a.localeCompare(b, "fr")); // Je trie par ordre alphabétique

   // Je génère chaque ustensile
   uniqueUstensilsSort.forEach((ustensil) => {
      const wrapperListUstensil = document.querySelector(".wrapper__list--ustensil");
      const ustensilWrapperModel = buttonUstensilFactory(ustensil);
      const ustensilWrapperCardDOM = ustensilWrapperModel.getUstensilWrapperDOM();
      wrapperListUstensil.appendChild(ustensilWrapperCardDOM);
   });
}
async function init() {
   // Récupère les datas des recettes
   displayData(recipes);
   displayButtonIngredient(recipes);
   displayButtonAppliance(recipes);
   displayButtonUstensil(recipes);
}

init();
