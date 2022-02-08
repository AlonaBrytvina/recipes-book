import { el } from '../../utils/createElement';
import './Modal.scss';
import '../../components/DishIngredients/DishIngredients.scss';
import { DishIngredients } from '../DishIngredients/DishIngredients';
import { handleCloseModal } from '../../utils/handleCloseModal';

export const renderModal = (recipe) => {
  console.log(recipe);
  const {name, imgUrl, description} = recipe;

  return el('div', {
    className: 'modal'
  }, [
    el('div', {
      className: 'modal-overlay'
    }, [
      el('div', {
        className: 'modal-window'
      }, [
        el('div', {
          className: 'modal-window__header'
        }, [
          el('div', {
            className: 'modal-window__title',
          }, [
            el('span', {
              className: 'modal-window__title-name',
              innerText: `${name}`
            }),
            el('span', {
              className: 'modal-window__description',
              innerText: `${description}`
            }),
          ]),
          el('span', {
            className: 'modal-window__close',
            innerText: 'x',
            onclick: () => handleCloseModal()
          }),
        ]),
        el('div', {
          className: 'modal-window__main',
        }, [
          el('div', {
            className: 'modal-window__img',
            style: `background: url(${imgUrl}) center / 100%`
          }),
          el('div', {
            className: 'card-info-container__dish-ingredients'
          }, recipe.ingredients.map(DishIngredients))
        ])
      ])
    ])
  ]);
};