import './MainSearch.scss';
import '../CardRecipe/CardRecipe.scss';

import { CardRecipe } from '../CardRecipe/CardRecipe';
import { el } from '../../utils/createElement';
import { recipes } from '../../api/recipes';

export const MainSearch = () => {
  return el('div', {
    className: 'search'
  }, [
    el('div', {
      className: 'search__name',
      innerText: 'SEARCH'
    }),
    el('div', {
      className: 'cards-container',
    }, recipes.map(CardRecipe))
  ])
}