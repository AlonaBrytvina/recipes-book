export const postData = (recipe) => {
  // const formData = new FormData();
  // formData.append("json", JSON.stringify( recipe ) )
  fetch('https://the-first-project.herokuapp.com/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify( recipe )
  })
    .then(res => res.json())
    .then(data => console.log(data))

}

