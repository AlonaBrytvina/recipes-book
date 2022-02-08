import { renderAll } from '../components';

export const handleCloseModal = () => {
  console.log('закрыть');
  renderAll({component: null, selectedItem: null, modalWindow: null, isOpen: false})
}