import styled from 'styled-components';

import { ImageGalleryItem } from './ImagegalleryItem';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <StyledList>
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          card={picture}
          onClick={() => {
            openModal(picture.largeImageURL);
          }}
        />
      ))}
    </StyledList>
  );
};






const StyledList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
