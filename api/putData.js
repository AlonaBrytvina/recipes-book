export const putData = (recipe) => {
  // const formData = new FormData();
  // formData.append("json", JSON.stringify(recipe))
  // console.log(recipe, formData)

  fetch('https://the-first-project.herokuapp.com/db/recipes', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe)
  })
    .then(res => res.json())
  .then(data => console.log(data))

}