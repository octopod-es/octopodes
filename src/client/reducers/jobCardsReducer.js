import * as types from '../constants/actionTypes';
const fetch = require('node-fetch');

const initialState = {
  interested: [],
  applied: [],
  phone: [],
  onsite: [],
  offer: [],
  accepted: [],
  newCard: false,
  columns: ['Interested', 'Applied', 'Phone Screen', 'Onsite', 'Offer'],
};

const jobCardsReducer = (state = initialState, action) => {
  let submittedCard;
  const stateCopy = { ...state };
  switch (action.type) {
    case types.POPULATE_DOM:
      stateCopy.interested = action.payload;

      return {
        ...state,
        interested: stateCopy.interested,
      };
    case types.NEW_CARD:
      stateCopy.newCard = true;
      return {
        ...state,
        newCard: stateCopy.newCard,
      };
    case types.SUBMIT_INFO:
      submittedCard = {
        company: action.payload.company,
        role: action.payload.role,
        link: action.payload.link,
        editable: false,
      };

      stateCopy.interested.unshift(submittedCard);
      stateCopy.newCard = false;

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submittedCard),
      })
        .catch((err) => {
          if (err) new Error;
        });

      return {
        ...state,
        newCard: stateCopy.newCard,
        interested: stateCopy.interested,
      };
    case types.DELETE_CARD:
      // console.log('in the reducer');
      let indexOfJobObj;
      let jobObjToSplice;
      for (let i = 0; i < stateCopy.interested.length; i += 1) {
        if (action.payload === stateCopy.interested[i].link) {
          indexOfJobObj = i;
          jobObjToSplice = stateCopy.interested[indexOfJobObj];
          // console.log('in the if');
        }
      }

      fetch('/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobObjToSplice),
      })
        .catch((err) => {
          if (err) new Error;
        });

      // console.log(stateCopy.interested);
      stateCopy.interested.splice(indexOfJobObj, 1);
      // console.log(stateCopy.interested);
      // console.log(action.payload);



      return {
        ...state,
        interested: stateCopy.interested,
      };
    default:
      return state;
  }
};

export default jobCardsReducer;
