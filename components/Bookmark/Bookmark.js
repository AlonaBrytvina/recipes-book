import { el } from '../../utils/createElement';
import './Bookmark.scss';
import { CardRecipe } from '../CardRecipe/CardRecipe';

export const renderBookmark = () => {
  const recipes = [];
  const recipe = JSON.parse(localStorage.getItem('bookmark'));
  recipes.push(recipe)
  console.log(recipes)

  return el('div', {
    className: 'bookmark'
  }, [
    el('div', {
      className: 'bookmark__title-name',
      innerText: 'Favorites'
    }),
    el('div', {
      className: 'cards-container'
    },
      recipes.map(CardRecipe)
    )
  ])
}