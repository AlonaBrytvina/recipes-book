import { renderAll } from '../components';

export const handleCardClick = (recipe) => {
  console.log(recipe)
  renderAll({component: recipe});
}