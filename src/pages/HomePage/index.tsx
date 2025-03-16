import React from 'react';
import NewsletterSection from '../../sections/NewsletterSection';
import CollectionSection from '../../sections/CollectionSection';
import MainLayout from '@/components/MainLayout';
import styles from './index.module.scss';
import ImageSwiper from '../../sections/ImageSwiper';
import CardProducts from '../../sections/CardProducts';

const HomePage = () => (
  <MainLayout>
    <div className={styles.wrapperSections}>
      <ImageSwiper />
      <CardProducts />
      <CollectionSection />
      <NewsletterSection />
    </div>
  </MainLayout>
);

export default HomePage;
