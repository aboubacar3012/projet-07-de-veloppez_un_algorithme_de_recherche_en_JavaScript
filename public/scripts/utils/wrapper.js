/**
 * Ouvre le menu déroulant des ingrédients.
 */
function openDropdownIngredient() {
   const wrapperIngredient = document.querySelector(".wrapper__select--ingredient");
   wrapperIngredient.className += " active";
}

/**
 * Ferme le menu déroulant des ingrédients.
 */
function closeDropdownIngredient() {
   const wrapperIngredient = document.querySelector(".wrapper__select--ingredient");
   wrapperIngredient.className = "wrapper__select--ingredient";
}

// Bouton ingrédients
// Ouverture du wrapper
const buttonWrapperIngredient = document.querySelector(".button__wrapper--ingredient");
buttonWrapperIngredient.addEventListener("click", openDropdownIngredient);

// Fermeture du wrapper
const wrapperHiddenIngredient = document.querySelector(".wrapper__icon--ingredient");
wrapperHiddenIngredient.addEventListener("click", closeDropdownIngredient);

/**
 * Ouvre le menu déroulant des appareils.
 */
function openDropdownAppareil() {
   const wrapperAppareil = document.querySelector(".wrapper__select--appareil");
   wrapperAppareil.className += " active";
}

/**
 * Ferme le menu déroulant des appareils.
 */
function closeDropdownAppareil() {
   const wrapperSelectAppareil = document.querySelector(".wrapper__select--appareil");
   wrapperSelectAppareil.className = "wrapper__select--appareil";
}

// Bouton appareils
// Ouverture du wrapper
const buttonWrapperAppareil = document.querySelector(".button__wrapper--appareil");
buttonWrapperAppareil.addEventListener("click", openDropdownAppareil);

// Fermeture du wrapper
const wrapperHiddenAppareil = document.querySelector(".wrapper__icon--appareil");
wrapperHiddenAppareil.addEventListener("click", closeDropdownAppareil);

/**
 * Ouvre le menu déroulant des ustensiles.
 */
function openDropdownUstensil() {
   const wrapperUstensil = document.querySelector(".wrapper__select--ustensil");
   wrapperUstensil.className += " active";
}

/**
 * Ferme le menu déroulant des ustensiles.
 */
function closeDropdownUstensil() {
   const wrapperSelectUstensil = document.querySelector(".wrapper__select--ustensil");
   wrapperSelectUstensil.className = "wrapper__select--ustensil";
}

// Bouton ustensils
// Ouverture du wrapper
const buttonWrapperUstensil = document.querySelector(".button__wrapper--ustensil");
buttonWrapperUstensil.addEventListener("click", openDropdownUstensil);

// Fermeture du wrapper
const wrapperHiddenUstensil = document.querySelector(".wrapper__icon--ustensil");
wrapperHiddenUstensil.addEventListener("click", closeDropdownUstensil);
