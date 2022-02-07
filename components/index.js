import '../assets/styles/style.scss';
import { renderSideMenu } from './SideMenu/SideMenu';
import { renderMain } from './Main/Main';
import { renderCardInfo } from './CardInfo/CardInfo';
import { el } from '../utils/createElement';

export const renderAll = (component) => {
  console.log(component);

  if (component !== undefined) {
    const $container = document.querySelector('.container');

    if ($container.childNodes.length === 3) {
      $container.childNodes?.[2].replaceWith($container.appendChild(renderCardInfo(component)));
      return;
    }
    $container.appendChild(renderCardInfo(component));
  }

  console.log(document.querySelector('.main') === null)
  if (document.querySelector('.main') !== null) {
    document.querySelector('.main').style.width = '850px';
    document.querySelector('.cards-container').style.overflowY = 'scroll';
    document.querySelector('.cards-container').style.height = '200px';
  }

  return el('div', {
    className: 'container'
  }, [
    renderSideMenu(),
    renderMain(),
  ]);
};
root.appendChild(renderAll());