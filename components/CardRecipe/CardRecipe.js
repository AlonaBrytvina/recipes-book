import './CardRecipe.scss';
import { handleCardClick } from '../../utils/handleCardClick';
import { el } from '../../utils/createElement';
import { CardTags } from '../CardTags/CardTags';

export const CardRecipe = (recipe) => {
 return  el('div', {
          className: 'card-wrapper',
          onclick: () => handleCardClick(recipe)
        }, [
          el('div', {
            className: 'card-wrapper__dish-img',
            style: `background: center
          linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.71) 80.73%),
          url(${recipe.imgUrl})
          center / 100%`
          }),
          el('div', {
            className: 'card-wrapper__filter'
          }, recipe.tags.map(CardTags)),
          el('span', {
            className: 'card-wrapper__dish-name',
            innerText: `${recipe.name}`
          })]);
};