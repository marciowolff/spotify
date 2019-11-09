export const ALERT_MESSAGE = 'ui:ALERT_MESSAGE';
export const LOADING = 'ui.LOADING';

export const alertMessage = (message = '') => dispatch => {
  dispatch({
    type: ALERT_MESSAGE,
    payload: {
      message,
    },
  });
};

export const setLoading = (loading = false) => dispatch => {
  dispatch({
    type: LOADING,
    payload: {
      loading,
    },
  });
};
