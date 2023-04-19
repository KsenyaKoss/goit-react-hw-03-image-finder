import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './Imagegallery/Imagegallery';
import { serviceApi } from './services/ServiceApi';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    isListShown: false,
    modalShown: null,
    error: '',
    query: '',
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    )
      this.getImages();
  };

  getImages = () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    serviceApi(page, query)
      .then(results => {
        this.setState(prevState => ({
          images: [...prevState.images, ...results.data.hits],
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false, isListShown: true }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = query => {
    this.setState({ images: [], query });
  };

  openModal = largeImage => {
    this.setState({ modalShown: largeImage });
  };
  closeModal = () => {
    this.setState({ modalShown: null });
  };

  render() {
    const { images, isLoading, isListShown, modalShown } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery pictures={images} openModal={this.openModal} />
        )}
        {isListShown && <Button onLoad={this.onLoadMore} />}
        {modalShown !== null && (
          <Modal poster={modalShown} onClose={this.closeModal} />
        )}
      </>
    );
  }
}
