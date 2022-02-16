import { el } from '../../utils/createElement';
import './AddRecipeIngredient.scss';

export const addRecipeIngredient = (ingredient) => {
  return el('div', {
    className: 'ingredient'
  }, [
    el('label', {
      for: `${ingredient.id}`,
      className: 'ingredient__input-label',
      innerText: `${ingredient.name}`
    }),
    el('input', {
      id: `${ingredient.id}`,
      className: 'ingredient__input-amount',
      type: 'number',
    }),
    el('input', {
      id: `${ingredient.id}`,
      className: 'ingredient__input-value',
      type: 'checkbox',
    }),
  ]);
};