import React from 'react';

import Preview from './Preview';
import Information from './Information';
import Description from './Description';


const Card = (props) => {
  const {
    video: {
      snippet: {
        channelTitle, publishedAt, title, description, thumbnails,
      },
      id: { videoId },
    },
  } = props;
  return (
    <div className="video">
      <Preview title={title} videoId={videoId} thumbnails={thumbnails} />
      <Information channelTitle={channelTitle} publishedAt={publishedAt} />
      <Description description={description} />
    </div>
  );
};

export default Card;
