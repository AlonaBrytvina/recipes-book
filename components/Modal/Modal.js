import { el } from '../../utils/createElement';
import './Modal.scss';
import '../../components/DishIngredients/DishIngredients.scss';
import { DishIngredients } from '../DishIngredients/DishIngredients';
import { viewRecipe } from '../../utils/viewRecipe';
import bookmark from '../../assets/svg/bookmark.svg';
import { saveToBookmark } from '../../utils/saveToBookmark';

export const renderModal = ({recipe, isSelected}) => {
  const {name, imgUrl, description} = recipe;

  return el('div', {
    className: 'modal'
  }, [
    el('div', {
      className: 'modal-overlay',
    }, [
      el('div', {
        className: 'modal-window',
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
          el('img', {
            className: 'modal-window__bookmark-icon',
            img: {
              src: `${isSelected}`,
              alt: 'bookmark'
            }
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
        ]),
        el('div', {
          className: 'modal-window__footer',
        }, [
          el('button', {
            className: 'footer__button-save',
            innerText: 'Add to bookmark',
            onclick: () => saveToBookmark({recipe, isSelected: true, isOpenModal: true})
          }),
          el('button', {
            className: 'footer__button-close',
            innerText: 'Close',
            onclick: () => viewRecipe({recipe, isOpen: false})
          })
        ])
      ])
    ])
  ]);
};