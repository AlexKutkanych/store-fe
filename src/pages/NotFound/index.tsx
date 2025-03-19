import NotFoundImage from '/images/not-found.jpg';
import styles from './index.module.scss';
import MainLayout from '../../components/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
    <div className={styles.pageWrapper}>
      <img width='300px' src={NotFoundImage} alt='Logo' />
      <h2>404 Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
    </MainLayout>
  );
};

export default NotFound;
