import React, { FC, ReactNode } from 'react';
import { getValidClassNames } from '@/helpers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.module.scss';

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  isLoading?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  showFooter = true,
  isLoading,
}) => (
  <>
    <Header />
    <div
      className={getValidClassNames(styles.main, {
        [styles.mainMaxHeight]: isLoading,
      })}
    >
      {children}
    </div>
    {showFooter && <Footer />}
  </>
);

export default MainLayout;
