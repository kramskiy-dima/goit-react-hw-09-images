import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscDown);
  }

  handleEscDown = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toogleModal();
    }
  };
  render() {
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  link: PropTypes.string.isRequired,
  toogleModal: PropTypes.func.isRequired,
};

export default Modal;
