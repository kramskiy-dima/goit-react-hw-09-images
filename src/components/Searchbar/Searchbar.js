import React, { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    queryValue: '',
  };

  hendleChange = e => {
    this.setState({
      queryValue: e.currentTarget.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.queryValue);
    this.setState({ queryValue: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            onChange={this.hendleChange}
            value={this.state.queryValue}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
