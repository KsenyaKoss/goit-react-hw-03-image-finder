import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
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
          <img src={this.props.poster} alt="image" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  poster: PropTypes.string,
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
