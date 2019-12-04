import * as types from '../constants/actionTypes';

export const newCardActionCreator = () => ({
  type: types.NEW_CARD
});

export const submitInfoActionCreator = (company, role, link) => ({
    type: types.SUBMIT_INFO,
    payload: {
        company,
        role,
        link
    }
});

export const populateDomActionCreator = (array) => ({
  type: types.POPULATE_DOM,
  payload: array,
});

export const deleteCardActionCreator = (link) => ({
  type: types.DELETE_CARD,
  payload: link,
});

// export const editInfoActionCreator = () => ({
//   type: types.EDIT_INFO,
// });