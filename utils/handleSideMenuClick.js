import { renderAll } from '../components';

export const handleSideMenuClick = (item) => {
  renderAll({component: null, selectedItem: item});
}
