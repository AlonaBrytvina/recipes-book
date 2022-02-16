import { postData } from '../api/postData';

export const createRecipe = (event) => {
  const {recipes} = JSON.parse(localStorage.getItem('db'));
  event.preventDefault();

  const $inputName = document.querySelector('.modal__name').value;
  const $inputDescription = document.querySelector('.modal__description').value;
  const $inputUrl = document.querySelector('.modal__img').value;

  const obj = {
    id: recipes.reverse()[0].id + 1,
    name: $inputName.length > 3 && $inputName.length < 40 ? $inputName : '',
    description: $inputDescription.length > 5 && $inputDescription.length < 200 ? $inputDescription : '',
    imgUrl: $inputUrl.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null ? $inputUrl : '',
    ingredients: [],
    tags: []
  };

  console.log($inputUrl.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)

  const $inputChecked = document.querySelectorAll('input[type=checkbox]:checked');
  console.log($inputChecked)

  const arrNumbers = Array.from(document.querySelectorAll('input[type=number]'))
    .map(select => select.id);

  for (let i = 0; i < $inputChecked.length; i++) {

    const id = arrNumbers.find(number => number === $inputChecked[i].id);

    const amountIngredient = document.getElementById(`${id}`).value
    console.log(amountIngredient)

    obj.tags.push(Number(id));
    obj.ingredients.push({id: +id, amount: +amountIngredient});
  }

  const {name, description, imgUrl, tags, ingredients} = obj;

  if(name.length !== 0, description.length !== 0, imgUrl, tags.length !== 0, ingredients.length !== 0){
    console.log(obj)
    // postData(obj)
  }

};