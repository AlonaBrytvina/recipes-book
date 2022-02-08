import './MainExploreRecipes.scss';
import { CardRecipe } from '../CardRecipe/CardRecipe';
import { MainFilter } from '../MainFilter/MainFilter';
import { el } from '../../utils/createElement';
import { recipes } from '../../api/recipes';
import { tags } from '../../api/tags';

export const MainExploreRecipes = () => {
 return el('div', {
    className: 'explore'
  }, [
    el('div', {
      className: 'explore__name',
      innerText: 'EXPLORE RECIPES'
    }),
    el('div',{
    className: 'explore__filter-container'
    }, tags.map(MainFilter)),
    el('div',{
      className: 'cards-container'
    }, recipes.map(CardRecipe))
  ])
}
