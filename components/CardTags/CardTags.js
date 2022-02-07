import { el } from '../../utils/createElement';
import { tags } from '../../api/tags';

export const CardTags = (tagId) => {
  const findTag = tags.find(tag => tag.id === tagId);

  return el('span', {
    className: 'card-wrapper__item',
    style: `background: ${findTag.color}`,
    innerText: `${findTag.name}`
  })
}