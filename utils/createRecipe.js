import { postData } from '../api/postData';

export const createRecipe = (event) => {
  event.preventDefault();
  const {recipes} = JSON.parse(localStorage.getItem('db'));

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

  const $inputCheckedValues = document.querySelectorAll('input[type=checkbox]:checked');

  const arrId = Array.from(document.querySelectorAll('input[type=number]'))
    .map(select => select.id);

  for (let i = 0; i < $inputCheckedValues.length; i++) {

    const id = arrId.find(number => number === $inputCheckedValues[i].id);
    const amountIngredient = document.getElementById(`${id}`).value

    obj.tags.push(Number(id));
    obj.ingredients.push({id: +id, amount: +amountIngredient});
  }

  const {name, description, imgUrl, tags, ingredients} = obj;

  if(name.length !== 0 && description.length !== 0 && imgUrl && tags.length !== 0 && ingredients.length && 0){
    postData(obj)
  }

};