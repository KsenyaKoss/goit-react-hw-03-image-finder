import { Component } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ev => {
    if (ev.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <StyledOverlay onClick={this.props.onClose}>
        <StyledModal>
          <img src={this.props.poster} alt="pic" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  poster: PropTypes.string,
};
