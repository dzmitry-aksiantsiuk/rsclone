import React from 'react';
import { connect } from 'react-redux';
import { getNextVideos, getPrevVideos } from '../actions';

import Button from './Button';

const ButtonList = ({
  nextToken,
  prevToken,
  getNextVideos,
  getPrevVideos,
}) => (
  <div className="buttonList">
    {
      prevToken
        ? <Button value="Get previous" onClick={getPrevVideos} />
        : null
    }
    {
      nextToken
        ? <Button value="Get next" onClick={getNextVideos} />
        : null
    }
  </div>
);

const mapStateToProps = ({ nextToken, prevToken }) => ({
  nextToken,
  prevToken,
});

const mapDispatchToProps = {
  getNextVideos,
  getPrevVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);
