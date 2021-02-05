export const getVideos = () => ({
  type: 'GET_VIDEOS',
});

export const getNextVideos = () => ({
  type: 'GET_NEXT_VIDEOS',
});

export const getPrevVideos = () => ({
  type: 'GET_PREV_VIDEOS',
});

export const getQuery = (query) => ({
  type: 'GET_QUERY',
  payload: query,
});
