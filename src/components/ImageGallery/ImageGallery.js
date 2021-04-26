import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ errorMsg, images, onClick, toogleModal }) => {
  const handleClick = e => {
    onClick(e.target.attributes.about.value);
  };

  return (
    <div>
      {errorMsg && <p className={s.error}>{errorMsg}</p>}
      <ul className={s.ImageGallery} onClick={handleClick}>
        {images.map(el => (
          <ImageGalleryItem key={el.id} image={el} onClick={toogleModal} />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  errorMsg: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
  toogleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
