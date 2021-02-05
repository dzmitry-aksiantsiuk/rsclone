import React from 'react';
import { connect } from 'react-redux';
import { getQuery, getVideos } from '../actions';

const Input = ({ getQuery, getVideos }) => (
  <form
    className="search-row"
    onSubmit={(event) => {
      event.preventDefault();
      return getVideos();
    }}
  >
    <button className="search-button" type="submit">
      <i className="fa fa-search" />
    </button>
    <input
      className="search-row-input"
      onChange={(e) => getQuery(e.target.value)}
      type="text"
      placeholder="What kind of video do you wanna find?"
    />
  </form>
);

const mapDispatchToProps = {
  getVideos,
  getQuery: (value) => getQuery(value),
};

export default connect(null, mapDispatchToProps)(Input);
