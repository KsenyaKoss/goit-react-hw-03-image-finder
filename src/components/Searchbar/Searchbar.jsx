import styled from 'styled-components';
import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    inputStr: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state.inputStr);
    this.setState(() => ({ inputStr: '' }));
  };

  handleOnChange = ev => {
    this.setState({ inputStr: ev.target.value });
  };

  render() {
    return (
      <Styledbar>
        <SearchForm>
          <Searchbutton type="submit" onClick={this.handleSubmit}>
            <span>
              <FaSearch />
              Search
            </span>
          </Searchbutton>

          <Searchinput
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputStr}
            onChange={this.handleOnChange}
          />
        </SearchForm>
      </Styledbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

const Styledbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const Searchbutton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const Searchinput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
