import { cloneDeep } from 'lodash';
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
};

const jobCardsReducer = (state = initialState, action) => {
  let submittedCard;
  const stateCopy = cloneDeep(state);
  switch (action.type) {
    case types.POPULATE_DOM:
      action.payload.forEach((el) => {
        stateCopy[el.applicationstatus].push(el);
      });
      return { ...state, ...stateCopy };
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
        applicationstatus: 'interested',
        editable: false,
      };

      stateCopy.interested.unshift(submittedCard);
      stateCopy.newCard = false;

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedCard),
      })
        .catch(() => console.log('Error posting new job card.  See jobCardsReducer.'));

      return {
        ...state,
        newCard: stateCopy.newCard,
        interested: stateCopy.interested,
      };

    default:
      return state;
  }
};

export default jobCardsReducer;
