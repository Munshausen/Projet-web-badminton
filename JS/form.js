/**
 * Fonctions utilisées pour les formulaires
 * @author Christian Bonhomme
 */

/**
 * Vérification qu'une valeur d'un formulaire est un nombre
 * @param element élement du formulaire
 * 
 * @return none
 */
function isNumber(elem)
{
  if (isNaN(elem.value))
  {
    alert(elem.value + ' n\'est pas un entier !');

    elem.value = '';
  }

} // isNumber(elem)
