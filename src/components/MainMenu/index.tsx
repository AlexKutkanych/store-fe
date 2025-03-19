import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainMenu } from '../Header/menu-data';
import useGetViewportWidth from '../../hooks/useGetViewportWidth';
import { ViewportWidth } from '../../constants/constants';
import styles from './index.module.scss';
import { MenuItem } from '../../types/types';

const MainMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  const { pathname } = useLocation();
  const currentCategory = pathname.split('/')[1];

  useEffect(() => {
    setSelectedCategory(currentCategory);
  }, []);

  const handleSelectCategory = useCallback(
    (category: string) => () => {
      setSelectedCategory(category);
    },
    []
  );

  const setCurrentCategory = useCallback(() => {
    setSelectedCategory(currentCategory);
  }, []);

  const menuClassName = useMemo(
    () => (label: string) => {
      return selectedCategory?.toLocaleLowerCase() === label.toLowerCase()
        ? styles.item
        : '';
    },
    [selectedCategory]
  );

  const toggleCategory = useCallback(
    (category: string) => () => {
      setSelectedCategory(category);
    },
    []
  );

  return (
    <nav className={styles.menu}>
      <ul>
        {mainMenu.map(({ id, href, label }: MenuItem) => (
          <li key={id}>
            {isMobile ? (
              <button
                className={menuClassName(label)}
                onClick={toggleCategory(label)}
              >
                {label}
              </button>
            ) : (
              <Link
                className={menuClassName(label)}
                to={href}
                onMouseEnter={handleSelectCategory(label)}
                onMouseLeave={setCurrentCategory}
                onClick={handleSelectCategory(label)}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
