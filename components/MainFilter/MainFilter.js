import { el } from '../../utils/createElement';

export const MainFilter = (tag) => {
  return el('div', {
    className: 'explore__item',
    style: `background: ${tag.color}`,
    innerText: `${tag.name}`
  }, [])
};
