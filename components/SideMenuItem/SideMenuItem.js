import { el } from '../../utils/createElement';
import { handleSideMenuClick } from '../../utils/handleSideMenuClick'

export const SideMenuItem = (item) => {

  return el('div', {
      className: item.name === 'spoon-fork-icon' ? `side-menu__${item.name} side-menu__selected` : `side-menu__${item.name}`,
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