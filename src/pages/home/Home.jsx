import React from "react";
import { useData } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();
  // console.log(state?.habitsArray);
  // console.log(state?.archiveArr);

  const homeHabitsArr = state?.habitsArray;
  console.log(homeHabitsArr);

  const deleteHandler = (ID) => {
    const v = state?.habitsArray.filter((habit) => habit.id !== ID);
  };

  const archiveHandler = (ID) => {
    const v = state?.habitsArray.find((habit) => habit.id === ID);

    dispatch({ type: "ADD_TO_ARCHIVE", payload: v });
  };

  return (
    <div>
      <button onClick={() => navigate("/popUp")}>add habits</button>
      <button onClick={() => navigate("/archive")}>archieve</button>
      <div style={{ display: "flex", gap: "2rem" }}>
        {state?.habitsArray?.map((habit) => (
          <li
            key={habit.name_}
            style={{
              width: "15rem",
              height: "5rem",
              border: "2px solid red",
            }}
          >
            {habit.name_}
            <button onClick={() => deleteHandler(habit?.id)}>delete</button>
            <button onClick={() => archiveHandler(habit?.id)}>ATA</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
