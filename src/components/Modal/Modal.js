import { useCallback, useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ link, toogleModal }) {
  const handleEscDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        toogleModal();
      }
    },
    [toogleModal],
  );

  const handleBackdropClick = useCallback(
    event => {
      if (event.currentTarget === event.target) {
        toogleModal();
      }
    },
    [toogleModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [handleEscDown]);

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={link} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  link: PropTypes.string.isRequired,
  toogleModal: PropTypes.func.isRequired,
};
