import * as types from '../constants/actionTypes';

const initialState = {
  interested: [],
  applied: [],
  phone: [],
  onsite: [],
  offer: [],
  newCard: false,
  columns: ['Interested', 'Applied', 'Phone Screen', 'Onsite', 'Offer']
};

const jobCardsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.NEW_CARD:
      stateCopy.newCard = true;
      // the new card doesn't get added to the interested array until it's submitted
      //   stateCopy.interested.unshift(newCard);
        console.log(stateCopy)
      return {
        ...state,
        newCard: stateCopy.newCard,
      };
    case types.SUBMIT_INFO:
        const submittedCard = {
            company: action.payload.company,
            role: action.payload.role,
            link: action.payload.link,
            editable: false,
        };

        stateCopy.interested.unshift(submittedCard);
        stateCopy.newCard = false;

        return{
            ...state,
            newCard: stateCopy.newCard,
            interested: stateCopy.interested,
        }


    default:
      return state;
  }
};

export default jobCardsReducer;
