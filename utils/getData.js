import { fetchData } from '../api/fetchData';
import { renderAll } from '../components';

export const getData = window.onload = () => {
  fetchData('db').then(data => {
    localStorage.setItem('db', JSON.stringify(data));
    root.appendChild(renderAll({data: data.recipes}));
    console.log(data);

  });
};

