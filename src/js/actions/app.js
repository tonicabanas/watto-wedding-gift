export const SET_EXAMPLE_DATA = 'SET_EXAMPLE_DATA';

export function getAppData() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: SET_EXAMPLE_DATA,
        message: 'Hello SEO!'
      });
    }, 1000);
  };
}
