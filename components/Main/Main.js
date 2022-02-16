import './Main.scss';
import { MainHeader } from '../MainHeader/MainHeader';
import { MainSearch } from '../MainSearch/MainSearch';
import { MainExploreRecipes } from '../MainExploreRecipes/MainExploreRecipes';
import { el } from '../../utils/createElement';

export const renderMain = (data) => {
  return el('div', {
    className: 'main',
  }, [
    MainHeader(),
    MainSearch(data),
    MainExploreRecipes(data)
  ]);
};