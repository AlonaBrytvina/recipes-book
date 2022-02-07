import { el } from '../../utils/createElement';
import { ingredients } from '../../api/ingredients';

export const DishIngredients = ({id, amount}) => {
  const findIngredient = ingredients.find(ingredient => ingredient.id === id);

  return el('div', {
    className: 'dish-ingredients-wrapper'
  }, [
    el('img', {
      className: 'dish-ingredients-wrapper__img',
      img: {
        src: `${findIngredient.imgUrl}`
      }
    }),
    el('span', {
      className: 'dish-ingredients-wrapper__name',
      innerText: `${findIngredient.name}`
    }),
    el('span', {
      className: 'dish-ingredients-wrapper__amount',
      innerText: `${amount}pc`
      }
    )
  ])
}