export const initialState = {
  habitsArray: [],
};

export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_HABITS_ARRAY": {
      return {
        ...state,
        habitsArray: action.payload,
      };
    }

    default:
      return state;
  }
};
