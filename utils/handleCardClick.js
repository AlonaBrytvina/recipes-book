import { renderAll } from '../components';

export const handleCardClick = (recipe) => {
  renderAll({component: recipe});
}