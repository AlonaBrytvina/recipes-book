import './SideMenu.scss';
import { SideMenuItem } from '../SideMenuItem/SideMenuItem';
import { el } from '../../utils/createElement';
import menu from '../../assets/svg/menu.svg';
import localDining from '../../assets/svg/localDining.svg';
import bookmark from '../../assets/svg/bookmark.svg';

export const items = [
  {
    name: 'spoon-fork-icon',
    src: localDining,
  },
  {
    name: 'bookmark-icon',
    src: bookmark,
  }
];

export const renderSideMenu = () => {
  return el('div', {
    className: 'side-menu-container'
  }, [
    el('div', {
      className: 'menu-icon',
    }, [
      el('img', {
        img: {
          src: `${menu}`,
          alt: 'menu'
        }
      })]),
    el('div', {
        className: 'side-menu',
      }, items.map(item => SideMenuItem(item))
    )]);
};


