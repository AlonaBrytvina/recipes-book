import { getData } from '../utils/getData';

export const fetchData = (urlPart= 'db') => {
  return fetch(`https://the-first-project.herokuapp.com/${urlPart}`)
    .then(response => response.json())
    .then(data => data)
}
