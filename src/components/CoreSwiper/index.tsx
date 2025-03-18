import { FC, ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
// @ts-expect-error assets
import 'swiper/scss';
// @ts-expect-error assets
import 'swiper/scss/navigation';
// @ts-expect-error assets
import 'swiper/scss/pagination';
// @ts-expect-error assets
import 'swiper/scss/autoplay';
// @ts-expect-error assets
import 'swiper/scss/effect-fade';

export type CoreSwiperProps = {
  children: ReactNode;
  modules?: SwiperProps['modules'];
  navigation?: SwiperProps['navigation'];
  pagination?: SwiperProps['pagination'];
  autoplay?: SwiperProps['autoplay'];
};

const CoreSwiper: FC<CoreSwiperProps> = ({
  children,
  navigation,
  modules,
  pagination,
  autoplay,
}) => (
  <Swiper
    modules={[Navigation, EffectFade, ...(modules || [])]}
    slidesPerView={1}
    pagination={pagination}
    navigation={navigation}
    autoplay={autoplay}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    rewind
  >
    {children}
  </Swiper>
);

export default CoreSwiper;
