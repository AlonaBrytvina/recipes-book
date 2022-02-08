import { el } from '../../utils/createElement';
import { handleSideMenuClick } from '../../utils/handleSideMenuClick'

export const SideMenuItem = (item) => {
  return el('div', {
      className: `side-menu__${item.name}`,
      onclick: () => handleSideMenuClick(`side-menu__${item.name}`)
    }, [
    el('img', {
      img: {
        src: `${item.src}`,
        alt: `${item.name}`
      }
    })
  ])
};