import React from 'react';

const Preview = ({ title, videoId, thumbnails }) => {
  const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnail = thumbnails.high.url;
  return (
    <div className="preview-container">
      <figure className="preview">
        <img src={thumbnail} alt={title} />
        <figcaption className="figcaption">
          <a className="figcaption-link" href={videoLink}>{title}</a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Preview;
