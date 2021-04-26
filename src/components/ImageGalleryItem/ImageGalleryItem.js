import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={s.ImageGalleryItem} onClick={onClick}>
      <img
        src={image.webformatURL}
        alt={image.type}
        about={image.largeImageURL}
        className={s['ImageGalleryItem-image']}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
