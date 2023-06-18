import React from "react";
import { useData } from "../../context/ContextProvider";

const Card = ({ habit }) => {
  const { state, dispatch } = useData();
  const addToArchive = (item) => {
    dispatch({
      type: "SET_HABITS_ARRAY",
      payload: item,
    });
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <p>{habit.name}</p>
      <button>delete</button>
      <button>ATA</button>
    </div>
  );
};

export default Card;
