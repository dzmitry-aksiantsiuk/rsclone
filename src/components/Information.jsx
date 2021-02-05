import React from 'react';

import { formatDate } from './helpers/Helpers';

const Information = (props) => {
  const { channelTitle, publishedAt } = props;
  return (
    <div className="video-information">
      <i className="author fas fa-male" />
      <p className="author">{channelTitle}</p>
      <i className="date far fa-calendar-alt" />
      <p className="date">{formatDate(publishedAt)}</p>
    </div>
  );
};

export default Information;
