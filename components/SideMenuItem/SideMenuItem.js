import bookmark from '../../assets/svg/bookmark.svg';
import localDining from '../../assets/svg/localDining.svg';
import menu from '../../assets/svg/menu.svg';
import { el } from '../../utils/createElement';

// const items = [
//   {
//     name: 'bookmark_icon',
//     src: menu,
//   },
//   {
//     name: 'spoon_fork_icon',
//     src: localDining,
//   },
//   {
//     name: 'menu_icon',
//     src: bookmark,
//   }
// ];

export const SideMenuItem = (item) => {
  return el('div', {
      className: `side-menu__${item.name}`,
      // onclick: `${this.classList.contains('side-menu_selected')
      //   ? this.classList.remove('side-menu_selected')
      //   : this.classList.add('side-menu_selected')}`
    }, [
    el('img', {
      img: {
        src: `${item.src}`,
        alt: `${item.name}`
      }
    })
  ])
//   const result = items.map(item => `
//     <div class="side-menu__${item.name}"
//          onclick="
//          this.classList.contains('side-menu_selected')
//          ? this.classList.remove('side-menu_selected')
//          : this.classList.add('side-menu_selected')"
//     >
//         <img src=${item.src} alt=${item.name}>
//     </div>
// `);
//
//   return `<div class="side-menu">${result.join('')}</div>`;
};