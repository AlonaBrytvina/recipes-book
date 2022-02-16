import { renderAddRecipe } from '../components/AddRecipe/AddRecipe';

export const addRecipe = ({isModalOpen, create}) => {
  const $container = document.querySelector('.container');

  if(isModalOpen){
    $container.appendChild(renderAddRecipe())
  }else{
    for(let i = 0; i <  $container.children.length; i++){
      if($container.children[i].className === 'modal-for-recipe'){
        $container.children[i].remove();
      }
    }
  }
}