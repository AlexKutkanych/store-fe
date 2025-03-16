import React, { useCallback, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MainMenu from '../MainMenu';
import ActionPanel from '../ActionPanel';
import Input from '@/modules/core/components/Input';
import logo from '/icons/logo.svg';
import Search from '/public/icons/Search';
import MenuIcon from '/public/icons/Menu';
import CrossIcon from '/public/icons/Cross';
import styles from './index.module.scss';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(Search, 'Search');

  const location = useLocation();
  const isProductsGridPage = /\/(men|women|children)\/products-grid/.test(
    location.pathname
  );
  console.log(isProductsGridPage);

  const isProductsGrid = (gridClass: string, defaultClass: string): string => {
    return isProductsGridPage ? gridClass : defaultClass;
  };

  const toggleOpenMenu = useCallback(
    () => () => setIsMenuOpen((prev) => !prev),
    []
  );

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <nav className={styles.navigation}>
            <button
              className={styles.openMenuButton}
              onClick={toggleOpenMenu()}
            >
              {isMenuOpen ? (
                <CrossIcon className={styles.crossIcon} />
              ) : (
                <MenuIcon className={styles.menuIconMobile} />
              )}
            </button>
            <div className={styles.wrapperMenu}>
              <MainMenu />
            </div>
          </nav>
          <Link to='/'>
            <img src={logo} className={styles.logo} alt='Logo' />
          </Link>
          <div className={isProductsGrid(styles.userBoxGrid, styles.userBox)}>
            <ActionPanel />
          </div>
        </div>
        <div
          className={isProductsGrid(
            styles.wrapperMenuMobileGrid,
            styles.wrapperMenuMobile
          )}
        >
          {isMenuOpen ? (
            <MainMenu />
          ) : (
            <div
              className={isProductsGrid(
                styles.wrapperInputGrid,
                styles.wrapperInput
              )}
            >
              <Input
                Icon={<Search className={styles.inputIcon} />}
                className={styles.inputMobile}
                placeholder='Search'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
