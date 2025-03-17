import React, { useEffect, useState, useCallback } from 'react';
import ProductsGrid from '@/sections/ProductsGrid';
import Loader from '@/components/Loader';
import { ViewportWidth } from '@/utils/constants';
import { Category } from '@/types/types';
import MainLayout from '@/components/MainLayout';
import FilterTabButtons from '@/components/FilterTabButtons';
import { filterButtons } from '@/components/FilterTabButtons/data';
import useGetViewportWidth from '@/hooks/useGetViewportWidth';
import styles from './index.module.scss';
import ActionPanel from '../../components/ActionPanel';
import { searchProducts } from '../../api/product';
import { useMutation } from '@tanstack/react-query';
import { SearchProductBodyProps } from '../../api/types';
import { Subcategory } from '../../types/types';

const ProductsGridPage = (): JSX.Element => {
  const searchProductsMutation = useMutation<
    unknown,
    Error,
    SearchProductBodyProps
  >({
    mutationFn: searchProducts,
  });

  const [activeButton, setActiveButton] = useState<string>(
    filterButtons[0]?.value
  );

  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  useEffect(() => {
    searchProductsMutation.mutate({
      category: Category.CLOTHING,
    });
    setActiveButton(filterButtons[0]?.value);
  }, []);

  const handleClick = useCallback((filter: Category | Subcategory) => {
    const subcategory =
      filter && filter !== Category.CLOTHING
        ? { subcategory: filter }
        : undefined;
    searchProductsMutation.mutate({
      category: Category.CLOTHING,
      ...subcategory,
    });
  }, []);

  console.log(searchProductsMutation, 'searchProductsMutation');

  return (
    <MainLayout isLoading={searchProductsMutation?.isPending}>
      <FilterTabButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        handleClick={handleClick}
      />
      <div className={styles.filterWrapper}>{isMobile && <ActionPanel />}</div>
      {searchProductsMutation?.isPending ? (
        <Loader />
      ) : (
        <ProductsGrid products={searchProductsMutation?.data} />
      )}
    </MainLayout>
  );
};

export default ProductsGridPage;
