import React, { JSX } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './index.module.scss';
import { slides } from './slides';
import CoreSwiper from '../../components/CoreSwiper';

export interface SlidesProps {
  id: number;
  image: string;
  imageSmall: string;
  text: string;
}

const ImageSwiper = (): JSX.Element => (
  <div className='collection-swiper'>
    <CoreSwiper
      modules={[Pagination, Autoplay]}
      navigation={true}
      pagination={{
        clickable: true,
        enabled: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
      }}
      autoplay={{
        delay: 5000,
      }}
    >
      {slides.map(({ text, image, imageSmall, id }) => (
        <SwiperSlide key={id}>
          <div className={styles.itemsWrapper}>
            <picture>
              <source media='(max-width: 480px)' srcSet={imageSmall} />
              <img src={image} alt={text} className={styles.image} />
            </picture>
            <p className={styles.text}>{text}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className={styles.wrapperButton}>
        <button className={styles.button}>View collection</button>
      </div>
    </CoreSwiper>
  </div>
);

export default ImageSwiper;
