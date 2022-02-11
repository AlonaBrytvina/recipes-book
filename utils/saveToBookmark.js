import { renderBookmark } from '../components/Bookmark/Bookmark';
import { renderAll } from '../components';
import { handleSideMenuClick } from './handleSideMenuClick';
import { CardRecipe } from '../components/CardRecipe/CardRecipe';
import { renderCardInfo } from '../components/CardInfo/CardInfo';
import { renderModal } from '../components/Modal/Modal';
import { viewRecipe } from './viewRecipe';

export const saveToBookmark = ({recipe, isSelected = false, isOpenModal = false}) => {
  localStorage.setItem('bookmark', JSON.stringify(recipe))
  console.log(recipe)
  if(!isOpenModal){
    renderAll({component: recipe, selectedItem: null, isOpenModal: false, isRecipeSelected: isSelected});

  }else{
    console.log('nen', isSelected, isOpenModal)
    // renderAll({component: null, selectedItem: null, isOpenModal: true, isRecipeSelected: isSelected});
    viewRecipe({recipe, isOpen: isOpenModal, isSelected})


  }

  // const arrOfRecipes = [];
  // arrOfRecipes.push(recipe);
  // renderBookmark(arrOfRecipes);
  // handleSideMenuClick({component: null, selectedItem: 'side-menu__spoon-fork-icon', isOpenModal: null, arrOfRecipes: arrOfRecipes})
  // return renderAll({component: null, selectedItem: 'side-menu__bookmark-icon side-menu__selected'})
}