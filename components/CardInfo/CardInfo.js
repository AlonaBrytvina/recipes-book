import './CardInfo.scss';
import { recipes } from '../../api/recipes';
import { ingredients } from '../../api/ingredients';
import { el } from '../../utils/createElement';
import { DishIngredients } from '../DishIngredients/DishIngredients';
import bookmarkWhite from '../../assets/svg/bookmarkWhite.svg';
import { viewRecipe } from '../../utils/viewRecipe';

export const renderCardInfo = (recipe) => {

  return el('div', {
    className: 'card-info'
  }, [
    el('div', {
      className: 'card-info__img',
      style: `background: center
          linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
          rgba(0, 0, 0, 0.71) 80.73%),
          url(${recipe.imgUrl})
          center / 100%`
    }),
    el('div', {
      className: 'card-info__icon-container',
    }, [
      el('img', {
        className: 'card-info__icon',
        img: {
          src: `${bookmarkWhite}`,
          alt: 'bookmarkWhite'
        }
      })
    ]),
    el('div', {
      className: 'card-info-container'
    }, [
      el('span', {
        className: 'card-info-container__dish-name',
        innerText: `${recipe.name}`
      }),
      el('span', {
        className: 'card-info-container__dish-description',
        innerText: `${recipe.description}`
      }),
      el('div', {
        className: 'card-info-container__category-name',
        innerText: 'Ingredients'
      }),
      el('div', {
        className: 'card-info-container__dish-ingredients',
      }, recipe.ingredients.map(DishIngredients)
      ),
      el('div', {
        className: 'card-info-container__button',
        onclick: () => viewRecipe(recipe),
      }, [
        el('span', {
          innerText: 'VIEW RECIPE'
        })
      ])
    ])
  ])
}