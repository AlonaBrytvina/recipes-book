import { el } from '../../utils/createElement';
import './AddRecipe.scss';
import { addRecipeIngredient } from '../AddRecipeIngredient/AddRecipeIngredient';
import { addRecipe } from '../../utils/addRecipe';
import { getIngredients } from '../../utils/getIngredients';
import { createRecipe } from '../../utils/createRecipe';

export const renderAddRecipe = () => {
  const ingredients = getIngredients();
  return el('div', {
    className: 'modal-for-recipe'
  }, [
    el('div', {
      className: 'modal-overlay',
    }, [
      el('form', {
        className: 'modal',
      }, [
        el('div', {
          className: 'modal__header'
        }, [
          el('div', {
            className: 'modal__title',
          }, [
            el('span', {
              className: 'modal__title-name',
              innerText: 'Creating a custom recipe'
            }),
          ]),
        ]),
        el('div', {
          className: 'modal__main',
        }, [
          el('div', {
            className: 'modal__main-container',
          }, [
            el('div', {
              className: 'modal__name-container',
              innerText: 'Enter a name'
            }, [
              el('input', {
                className: 'modal__name',
                type: 'text',
              }),
            ]),
            el('div', {
              className: 'modal__description-container',
              innerText: 'Enter a description'

            }, [el('input', {
              className: 'modal__description',
              type: 'text',
            }),
            ]),
            el('div', {
              className: 'modal__img-container',
              innerText: 'Enter a url'

            }, [
              el('input', {
                className: 'modal__img',
                type: 'text',
              }),
            ]),
          ]),
          el('div', {
              className: 'modal__ingredients',
            }, ingredients.map(addRecipeIngredient)
          )]),
        el('div', {
          className: 'modal__footer',
        }, [
          el('button', {
            className: 'modal__button-save',
            innerText: 'Create',
            onclick: (event) => createRecipe(event)
          }),
          el('button', {
            className: 'modal__button-close',
            innerText: 'Close',
            onclick: () => addRecipe({isModalOpen: false})
          })
        ])
      ])
    ])
  ]);
};
