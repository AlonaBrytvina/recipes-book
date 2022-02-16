import './MainHeader.scss';
import addCircle from '../../assets/svg/addCircle.svg';
import { el } from '../../utils/createElement';
import { addRecipe } from '../../utils/addRecipe';

export const MainHeader = () => {
  return el('div', {
    className: 'header'
  }, [
    el('div', {
      className: 'header__category-name'
    }, [
      el('div', {
        className: 'header__main',
        innerText: 'FOOD'
      }),
      el('div', {
        className: 'header__add',
        onclick: () => addRecipe({isModalOpen: true})
      }, [
        el('img', {
          className: 'header__icon',
          img: {
            src: `${addCircle}`,
            alt: "add circle"
          }
        }),
        el('span', {
          innerText: 'Add new recipe'
        })
      ])
    ])
  ])
}
