import { renderCardInfo } from '../components/CardInfo/CardInfo';
import { renderAll } from '../components';

export const handleCardClick = (recipe) => {
  renderAll({component: recipe, selectedItem: null});
}