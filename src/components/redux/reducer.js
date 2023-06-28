import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters:[],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        //! VER SI ESTA BIEN ESTE CASO.
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: [
          state.myFavorites.filter((charc) => charc.id !== action.payload),
        ],
      };

    /* case FILTER:
      const allCharactersFilter = [...state.allCharacters];
      allCharactersFilter.filter((charc) => charc.gender === action.payload);
      return { ...state, myFavorites: allCharactersFilter }; */

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        const allCharactersFilter = state.allCharacters.filter(
          (charc) => charc.gender === action.payload
        );
        return {
          ...state,
          myFavorites: allCharactersFilter,
        };
      };

   /*  case ORDER:
      const allCharactersOrder = [...state.allCharacters];
      if (action.payload === "A") {
        allCharactersOrder.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        allCharactersOrder.sort((a, b) => b.id - a.id);
      }
      return { ...state, myFavorites: allCharactersOrder };
 */
    case ORDER:
      const allCharactersOrder = [...state.allCharacters];
      if (action.payload === "A") {
        allCharactersOrder.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        allCharactersOrder.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: allCharactersOrder,
      };

    default:
      return { ...state };
  }
};
 
export default rootReducer