import * as types from '../constants/actionTypes';

export const newCardActionCreator = () => ({
  type: types.NEW_CARD,
});

export const submitInfoActionCreator = (company, role, link) => ({
  type: types.SUBMIT_INFO,
  payload: {
    company,
    role,
    link,
  },
});

export const populateDomActionCreator = (array) => ({
  type: types.POPULATE_DOM,
  payload: array,
});

export const moveCardActionCreator = () => ({
  type: types.MOVE_CARD,
});

// export const editInfoActionCreator = () => ({
//   type: types.EDIT_INFO,
// });
