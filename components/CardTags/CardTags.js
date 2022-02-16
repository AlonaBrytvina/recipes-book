import { el } from '../../utils/createElement';
import { getTags } from '../../utils/getTags';

export const CardTags = (tagId) => {
  const tags = getTags();
  const findTag = tags?.find(tag => tag.id === tagId);

  return el('span', {
    className: 'card-wrapper__item',
    style: `background: ${findTag.color}`,
    innerText: `${findTag.name}`
  });
};