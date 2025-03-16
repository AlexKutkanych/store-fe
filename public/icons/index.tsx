import React, { JSX } from 'react';

import InstagramImg from '@/assets/svgs/Instagram';
import FacebookImg from '@/assets/svgs/Facebook';
import TwitterImg from '@/assets/svgs/Twitter';
import PinterestImg from '@/assets/svgs/Pinterest';
import EarthIcon from '@/assets/svgs/Earth';
import PhoneIcon from '@/assets/svgs/Phone';
import styles from './index.module.scss';

const socialIcons = [InstagramImg, FacebookImg, TwitterImg, PinterestImg];

const CompanyInfo = (): JSX.Element => {
  const phone: string = '050 111 111';

  return (
    <>
      <div className={styles.social}>
        {socialIcons.map((SocialIcon, index) => (
          <button className={styles.socialBtn} key={index}>
            <SocialIcon />
          </button>
        ))}
      </div>
      <button className={styles.infoBtn}>
        <EarthIcon className={styles.img} />
        <p className={styles.language}>UA | Ukrainian</p>
      </button>
      <div className={styles.infoBox}>
        <PhoneIcon className={styles.img} />
        <p className={styles.number}>{phone}</p>
        <span className={styles.active}>online</span>
      </div>
      <p className={styles.workDays}>Available 24/7</p>
    </>
  );
};

export default CompanyInfo;
