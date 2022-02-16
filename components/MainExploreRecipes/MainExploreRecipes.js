import './MainExploreRecipes.scss';
import { CardRecipe } from '../CardRecipe/CardRecipe';
import { MainFilter } from '../MainFilter/MainFilter';
import { el } from '../../utils/createElement';
import { getTags } from '../../utils/getTags';

export const MainExploreRecipes = (data) => {
  const tags = getTags();
  return el('div', {
    className: 'explore'
  }, [
    el('div', {
      className: 'explore__name',
      innerText: 'EXPLORE RECIPES'
    }),
    el('div', {
      className: 'explore__filter-container'
    }, tags.map(MainFilter)),
    el('div', {
      className: 'cards-container'
    }, data?.map(CardRecipe))
  ]);
};
