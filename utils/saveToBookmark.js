import { renderAll } from '../components';
import { viewRecipe } from './viewRecipe';

export const saveToBookmark = ({recipe, isSelected = false, isOpenModal = false}) => {
  localStorage.setItem('bookmark', JSON.stringify(recipe))
  if(!isOpenModal){
    renderAll({component: recipe, selectedItem: null, isOpenModal: false, isRecipeSelected: isSelected});

  }else{
    viewRecipe({recipe, isOpen: isOpenModal, isSelected})
  }
}