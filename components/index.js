import '../assets/styles/style.scss';
import { renderSideMenu } from './SideMenu/SideMenu';
import { renderMain } from './Main/Main';
import { renderCardInfo } from './CardInfo/CardInfo';
import { el } from '../utils/createElement';
import { renderModal } from './Modal/Modal';

export const renderAll = (item) => {
  console.log(item)
  const $container = document.querySelector('.container');

  if (item !== undefined) {
    const {component, selectedItem, modalWindow, isOpen} = item;

    if (component !== undefined && component !== null) {

      if ($container.childNodes.length === 3) {
        $container.childNodes?.[2].replaceWith($container.appendChild(renderCardInfo(component)));

        return;
      }

      document.querySelector('.main').style.width = '850px';
      document.querySelector('.cards-container').style.overflowY = 'scroll';
      document.querySelector('.cards-container').style.height = '200px';

      $container.appendChild(renderCardInfo(component));
    }

    if (selectedItem !== undefined && selectedItem !== null) {

      if(document.querySelector(`.${selectedItem}`).classList.contains('side-menu__selected')) {
        for (let i = 0; i < document.querySelector('.side-menu').children.length; i++) {
          document.querySelector(`.side-menu`).children[i].classList.remove('side-menu__selected');
        }
      }else{
        for (let i = 0; i < document.querySelector('.side-menu').children.length; i++) {
          document.querySelector(`.side-menu`).children[i].classList.remove('side-menu__selected');
        }
        document.querySelector(`.${selectedItem}`).classList.add('side-menu__selected');
      }
    }

    if(modalWindow !== null && modalWindow !== undefined){
      // $container.appendChild(renderModal(modalWindow))
      //подумать над альтернативой
        $container.appendChild(renderModal(modalWindow))
    }

    if(isOpen !== null && isOpen !== undefined){
      $container.childNodes[3].remove()
    }
  }

  return el('div', {
    className: 'container'
  }, [
    renderSideMenu(),
    renderMain(),
    // renderModal(),
  ]);
};
root.appendChild(renderAll());