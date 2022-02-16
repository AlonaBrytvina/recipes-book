import { getData } from '../utils/getData';
import { renderAll } from '../components';

export const fetchData = (urlPart= 'db') => {
  return fetch(`https://the-first-project.herokuapp.com/${urlPart}`)
    .then(response => response.json())
    .then(data => data)
}

//  function getData(data) {
//   console.log(data);
//   return root.appendChild(renderAll(
//     {data: data}));
//
// };