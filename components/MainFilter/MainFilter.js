import { tags } from '../../api/tags';
import { el } from '../../utils/createElement';

export const MainFilter = (tag) => {
  // console.log(tag)
  return el('div', {
    className: 'explore__item',
    style: `background: ${tag.color}`,
    innerText: `${tag.name}`
  }, [])
//   const tagsRender = tags.map(tag => `
//    <div
//         class="explore__item"
//         style="background: ${tag.color}"
//    >
//    ${tag.name}
//    </div>
// `);
//   return tagsRender;
};
