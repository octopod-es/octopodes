import * as types from '../constants/actionTypes';

const initialState = {
  interested: [],
  applied: [],
  phone: [],
  onsite: [],
  offer: [],
  newCard: {},
};

const jobCardsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.ADD_CARD: 
      const newCard = {
        company: '',
      };
      stateCopy.newCard = newCard;
      stateCopy.interested.unshift(newCard);
      return {
        ...state,
        interested: stateCopy.interested,
        newCard: stateCopy.newCard,
      };
    default: 
      return state;
  }
}