import React, { useState } from "react";
import { useData } from "../../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { Popup } from "../../component/popUp/Popup";
import Card from "../../component/card/Card";

const Home = () => {
  const { state, dispatch } = useData();
  const [modal, setModal] = useState(false);
  const [habit, setHabit] = useState({});

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setHabit({ ...habit, [name]: value });
  };

  const toggleFunc = () => {
    setModal(!modal);
  };

  const saveHandler = () => {
    dispatch({
      type: "SET_HABITS_ARRAY",
      payload: [...state?.habitsArray, { ...habit, isArchive: false }],
    });
    toggleFunc();
    setHabit({});
    // navigate("/");
  };

  const Repeat = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
  ];
  const Goals = [
    { label: "1 times Daily", value: "1 times Daily" },
    { label: "2 times Daily", value: "2 times Daily" },
    { label: "3 times Daily", value: "3 times Daily" },
  ];
  const TimesOfDay = [
    { label: "Any time", value: "Any time" },
    { label: "Morning", value: "Morning" },
    { label: "Evening", value: "Evening" },
  ];
  const StartDate = [
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "Now", value: "Now" },
  ];

  const habitList = state?.habitsArray.filter((habit) => !habit.isArchive);

  return (
    <div>
      <button onClick={toggleFunc}>add habits</button>
      <Link to="./archive">archieve</Link>
      <div style={{ display: "flex", gap: "2rem" }}>
        {habitList?.map((habit) => (
          <Card habit={habit} />
        ))}
      </div>

      {modal && (
        <Popup
          content={
            <form onSubmit={saveHandler}>
              <input
                type="text"
                placeholder="task name"
                name="name"
                value={habit.name}
                onChange={inputHandler}
              />
              <select
                value={habit.repeat}
                name="repeat"
                onChange={inputHandler}
              >
                {Repeat.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select value={habit.goals} name="goals" onChange={inputHandler}>
                {Goals.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select
                value={habit.timeOfDay}
                name="tod"
                onChange={inputHandler}
              >
                {TimesOfDay.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select
                value={habit.startDate}
                name="startDate"
                onChange={inputHandler}
              >
                {StartDate.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <button type="submit">save</button>
            </form>
          }
          handleClose={toggleFunc}
        />
      )}
    </div>
  );
};

export default Home;
