const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUERY':
      return { ...state, query: action.payload };
    case 'GET_VIDEOS':
      return { ...state, loading: true };
    case 'GET_NEXT_VIDEOS':
      return { ...state, loading: true };
    case 'GET_PREV_VIDEOS':
      return { ...state, loading: true };
    case 'VIDEOS_RECEIVED':
      return {
        ...state,
        loading: false,
        videos: action.data,
        nextToken: action.next,
        prevToken: action.prev,
      };
    default:
      return state;
  }
};

export default reducer;
