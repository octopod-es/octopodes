import * as types from '../constants/actionTypes';

const initialState = {
  interested: [],
  applied: [],
  phone: [],
  onsite: [],
  offer: [],
  newCard: false,
};

const jobCardsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.ADD_CARD:
      stateCopy.newCard = true;
      // the new card doesn't get added to the interested array until it's submitted
      //   stateCopy.interested.unshift(newCard);
      return {
        ...state,
        newCard: stateCopy.newCard,
      };
    default:
      return state;
  }
};

export default jobCardsReducer;
