import React, { createContext, useContext, useReducer } from "react";
import { ReducerFunc } from "../reducer/Reducer";
import { initialState } from "../reducer/Reducer";

const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

const ContextP = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunc, initialState);
  return (
    <div>
      <ContextProvider.Provider value={{ state, dispatch }}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};

export default ContextP;
