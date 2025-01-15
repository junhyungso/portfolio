import BannerImage from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BannerImage} alt="banner" className="banner-image" />
    </div>
  );
};

export default Banner;
