import * as types from '../constants/actionTypes';

export const addCardActionCreator = (jobId) => ({
  type: types.ADD_CARD,
  payload: jobId,
});

