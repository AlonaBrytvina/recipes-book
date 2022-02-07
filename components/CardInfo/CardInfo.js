import './CardInfo.scss';
import { recipes } from '../../api/recipes';
import { ingredients } from '../../api/ingredients';
import { el } from '../../utils/createElement';
import { DishIngredients } from '../DishIngredients/DishIngredients';

export const renderCardInfo = (recipe) => {
  console.log(recipe)
  const {imgUrl} = recipe;
  console.log(imgUrl)

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
        className: 'card-info-container__button'
      }, [
        el('span', {
          innerText: 'VIEW RECIPE'
        })
      ])
    ])
  ])
  // return`
  //  <div class="card-info">
  //       <div
  //         style="background: center
  //         linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
  //         rgba(0, 0, 0, 0.71) 80.73%),
  //         url(${recipes[0].imgUrl})
  //         center / 100%"
  //         class="card-info__img"
  //     >
  //      </div>
  //      <div class="card-info-container">
  //         <span class="card-info-container__dish-name">${recipes[0].name}</span>
  //         <span class="card-info-container__dish-description">${recipes[0].description}</span>
  //         <div class="card-info-container__category-name">Ingredients</div>
  //         <div class="card-info-container__dish-ingredients">
  //             ${recipes[0].ingredients.map(ingredientRecipe =>{
  //               const findIngredient = ingredients.find(ingredient => ingredient.id === ingredientRecipe.id);
  //               const findAmount = recipes[0].ingredients.find(ingredient => ingredient.id === ingredientRecipe.id);
  //               return` <div class="dish-ingredients-wrapper">
  //                             <img class="dish-ingredients-wrapper__img" src=${findIngredient.imgUrl}>
  //                             <span class="dish-ingredients-wrapper__name">${findIngredient.name}</span>
  //                             <span class="dish-ingredients-wrapper__amount">${findAmount.amount}pc</span>
  //                          </div>`
  //             }).join('')}
  //         </div>
  //         <div class="card-info-container__button">
  //             <span>VIEW RECIPE</span>
  //         </div>
  //      </div>
  //  <div>
  // `;
}