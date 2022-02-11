import { renderModal } from '../components/Modal/Modal';
import { renderAll } from '../components';
import bookmark from '../assets/svg/bookmark.svg';
import bookmarkChanged from '../assets/svg/bookmarkChanged.svg';

export const viewRecipe = (options) => {
  const {recipe, isOpen, isSelected} = options;
  const $container = document.querySelector('.container');
  const selected = isSelected ? `${bookmark}` : `${bookmarkChanged}`;

  renderAll({component: null, selectedItem: null, isOpenModal: isOpen});
  console.log(isOpen)

  if (isOpen) {

    if($container.contains(document.querySelector('.modal'))){
      document.querySelector('.modal').replaceWith($container.appendChild(renderModal({recipe, isSelected: selected})))
    }else{
      $container.appendChild(renderModal({recipe, isSelected: selected}));
    }

    const $modal = document.querySelector('.modal-overlay')

    window.onclick = function (event){

      if(event.target === $modal){
        $container.childNodes[3].remove();
        renderAll({component: null, selectedItem: null, isOpenModal: false})
      }
    }

  } else {
    console.log(isOpen, '2')
    for (let i = 0; i < $container.children.length; i++) {

      if ($container.children[i].className === 'modal') {
        $container.children[i].remove();
        console.log('1')
        renderAll({component: null, selectedItem: null, isOpenModal: false})
      }
    }
  }
};