import './SideMenu.scss';
import { SideMenuItem } from '../SideMenuItem/SideMenuItem';
import menu from '../../assets/svg/menu.svg';
import localDining from '../../assets/svg/localDining.svg';
import bookmark from '../../assets/svg/bookmark.svg';
import { el } from '../../utils/createElement';

const items = [
    {
        name: 'bookmark_icon',
        src: menu,
    },
    {
        name: 'spoon_fork_icon',
        src: localDining,
    },
    {
        name: 'menu_icon',
        src: bookmark,
    }
];

export const renderSideMenu = () => {
    return  el('div', {
        className: 'side-menu-container'
    }, [
      el('div', {
          className: 'side-menu'
      }, items.map(item => SideMenuItem(item))
      )])

    // console.log(c)

//     `
//     <div class="side-menu-container">
// <!--        ${SideMenuItem()} -->
//     </div>
// `;
}


