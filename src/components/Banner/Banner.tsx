import BannerImage from '../../assets/banner.jpg';
import styles from './Banner.module.css';

const Banner = () => {
  return <img src={BannerImage} alt="banner" className={styles.bannerImage} />;
};

export default Banner;
