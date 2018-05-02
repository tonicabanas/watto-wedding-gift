export const SET_EXAMPLE_DATA = 'SET_EXAMPLE_DATA';

const getAppData = (dispatch, getState) => new Promise((resolve) => {
  setTimeout(() => {
    dispatch({
      type: SET_EXAMPLE_DATA,
      message: 'Hello SEO!'
    });
    resolve();
  }, 1000);
});

export {
  getAppData
};
