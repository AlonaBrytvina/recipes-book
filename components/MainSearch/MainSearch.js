import './MainSearch.scss';
import '../CardRecipe/CardRecipe.scss';
import { CardRecipe } from '../CardRecipe/CardRecipe';
import { el } from '../../utils/createElement';

export const MainSearch = (data) => {
  return el('div', {
    className: 'search'
  }, [
    el('div', {
      className: 'search__name',
      innerText: 'SEARCH'
    }),
    el('div', {
      className: 'cards-container',
    }, data?.map(CardRecipe))
  ]);
};