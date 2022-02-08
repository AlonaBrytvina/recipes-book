import './SideMenu.scss';
import { SideMenuItem } from '../SideMenuItem/SideMenuItem';
import { el } from '../../utils/createElement';
import { items } from '../../api/items';

export const renderSideMenu = () => {
  return el('div', {
    className: 'side-menu-container'
  }, [
    el('div', {
        className: 'side-menu'
      }, items.map(item => SideMenuItem(item))
    )]);
};


