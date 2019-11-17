import { createStore } from 'redux';

// state
const initialState = {
  itemsList: [],
};

// action types
const SET_ITEMS_LIST = 'SET_ITEMS_LIST';
const SET_ITEM_TEXT = 'SET_ITEM_TEXT';
const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
const SET_SELECTED_ID = 'SET_SELECTED_ID';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_COMMENT = 'ADD_COMMENT';

// action creators
export const setItemsList = itemsList => ({ type: SET_ITEMS_LIST, itemsList });
export const setItemText = itemText => ({ type: SET_ITEM_TEXT, itemText });
export const addNewItem = newItem => ({ type: ADD_NEW_ITEM, newItem });
export const setSelectedId = itemId => ({ type: SET_SELECTED_ID, itemId });
export const removeItem = itemId => ({ type: REMOVE_ITEM, itemId });
export const addComment = comment => ({ type: ADD_COMMENT, comment });

// selectors
export const getItemsList = state => state.itemsList;
export const getItemText = state => state.itemText || '';
export const getSelectedId = state => state.selectedId;


const reducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS_LIST:
      return ({...state, itemsList: action.itemsList });

    case SET_ITEM_TEXT:
      return ({ ...state, itemText: action.itemText });

    case ADD_NEW_ITEM:
      return ({ ...state, itemsList: [ ...state.itemsList, action.newItem ] });

    case SET_SELECTED_ID:
      return ({ ...state, selectedId: action.itemId });

    case REMOVE_ITEM:
      return ({
        ...state,
        itemsList: state.itemsList.filter(item => item.id !== action.itemId),
      });

    case ADD_COMMENT: {
      const selectedItem = state.itemsList.find(item => item.id === state.selectedId);
      selectedItem.comments.push(action.comment);

      return ({ ...state, itemsList: [ ...state.itemsList ] })
    }

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
