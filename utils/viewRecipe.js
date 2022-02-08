import { renderAll } from '../components';

export const viewRecipe = (recipe) => {
  renderAll({component: null, selectedItem: null, modalWindow: recipe})
  console.log(recipe);
}