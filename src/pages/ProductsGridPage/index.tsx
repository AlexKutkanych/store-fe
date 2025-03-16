import React, { useEffect, useState, useCallback } from 'react';
import ProductsGrid from '@/sections/ProductsGrid';
import Loader from '@/components/Loader';
import {
  FIRST_PAGE,
  PRODUCT_GRID_SIZE,
  PRODUCT_GRID_SIZE_MOBILE,
  ViewportWidth,
} from '@/utils/constants';
import { Category, BodySearchProducts } from '@/types/types';
// import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import MainLayout from '@/components/MainLayout';
import FilterTabButtons from '@/components/FilterTabButtons';
import { filterButtons } from '@/components/FilterTabButtons/data';
import useGetViewportWidth from '@/hooks/useGetViewportWidth';
import styles from './index.module.scss';
import ActionPanel from '../../components/ActionPanel';

const ProductsGridPage = (): JSX.Element => {
  // const [searchProducts, { isLoading, data }] =
  //   useFetchProductsWithImagesMutation();

  const isLoading = false;
  const data = [];
  const searchProducts = () => {};

  const [activeButton, setActiveButton] = useState<string>(
    filterButtons[0]?.value
  );

  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);
  const gridPageSize = isMobile ? PRODUCT_GRID_SIZE_MOBILE : PRODUCT_GRID_SIZE;

  useEffect(() => {
    searchProducts({
      page: FIRST_PAGE,
      size: gridPageSize,
      body: {
        category: Category.CLOTHING,
      },
    });
    setActiveButton(filterButtons[0]?.value);
  }, [isMobile]);

  const handleClick = useCallback((body: BodySearchProducts) => {
    searchProducts({
      page: FIRST_PAGE,
      size: gridPageSize,
      body,
    });
  }, []);

  return (
    <MainLayout isLoading={isLoading}>
      <FilterTabButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        handleClick={handleClick}
      />
      <div className={styles.filterWrapper}>{isMobile && <ActionPanel />}</div>
      {isLoading ? <Loader /> : <ProductsGrid searchProducts={data} />}
    </MainLayout>
  );
};

export default ProductsGridPage;
