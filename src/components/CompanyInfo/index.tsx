import  { JSX } from 'react';
// @ts-expect-error assets
import InstagramImg from '/public/icons/Instagram';
// @ts-expect-error assets
import FacebookImg from '/public/icons/Facebook';
// @ts-expect-error assets
import TwitterImg from '/public/icons/Twitter';
// @ts-expect-error assets
import PinterestImg from '/public/icons/Pinterest';
// @ts-expect-error assets
import EarthIcon from '/public/icons/Earth';
// @ts-expect-error assets
import PhoneIcon from '/public/icons/Phone';
import styles from './index.module.scss';

const socialIcons = [
  { id: 0, href: 'http://instagram.com', Icon: InstagramImg, alt: 'Instagram' },
  { id: 1, href: 'http://facebook.com', Icon: FacebookImg, alt: 'Facebook' },
  { id: 2, href: 'http://twitter.com', Icon: TwitterImg, alt: 'Twitter' },
  { id: 3, href: 'http://pinterest.com', Icon: PinterestImg, alt: 'Pinterest' },
];

const CompanyInfo = (): JSX.Element => {
  const phone: string = '050 111 111';

  return (
    <>
      <div className={styles.social}>
        {socialIcons.map(({ id, Icon, href }) => (
          <a href={href} className={styles.socialBtn} key={id} target='_blank'>
            <Icon />
          </a>
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
