import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Loading from './Loading';

const CardList = ({ videos, loading }) => (
  loading
    ? <Loading />
    : (
      <div id="slider">
        {
        videos
          ? videos.map((video) => <Card key={video.id.videoId} video={video} />) : null
    }

      </div>
    )
);

const mapStateToProps = ({ videos, loading }) => ({
  videos,
  loading,
});

export default connect(mapStateToProps)(CardList);
