export const initialState = {
  habitsArray: [],
  homeHabitsArr: null,
  archiveArr: [],
};

export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_HABITS_ARRAY": {
      return {
        ...state,
        habitsArray:
          state?.habitsArray?.length >= 0
            ? [...state?.habitsArray, action.payload]
            : "",
      };
    }
    case "ADD_TO_ARCHIVE": {
      return {
        ...state,
        archiveArr:
          state?.archiveArr?.length >= 0
            ? [...state?.archiveArr, action.payload]
            : "",
      };
    }

    default:
      return state;
  }
};
