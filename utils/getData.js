import { fetchData } from '../api/fetchData';
import { renderAll } from '../components';

export const getData = () => {
  fetchData('db').then(data => {
    console.log(data)
    localStorage.setItem('db', JSON.stringify(data));
    root.appendChild(renderAll({data: data.recipes}));
  });
};
