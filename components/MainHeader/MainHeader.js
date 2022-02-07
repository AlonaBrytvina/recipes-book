import './MainHeader.scss';
import addCircle from '../../assets/svg/addCircle.svg';
import { el } from '../../utils/createElement';

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
        className: 'header__add'
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
// `
//    <div class="header">
//       <div class="header__category-name">
//           <div class="header__main">FOOD</div>
//           <div class="header__add">
//               <img class="header__icon" src=${addCircle} alt="add circle">
//               <span>Add new recipe</span>
//           </div>
//       </div>
//   </div>
// `;
