import styled from 'styled-components';

export const Modal = ({poster, onClose}) => {
  console.log(poster);
  return (
    <StyledOverlay>
      <StyledModal >
        <img src={poster.largeImageURL} alt="image"/>
        <CloseButton onClick={onClose}>×</CloseButton>
      </StyledModal>
    </StyledOverlay>
  );
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
cursor: pointer;`