import React, { useState } from "react";
import { useData } from "../../context/ContextProvider";
import { Popup } from "../popUp/Popup";

const Card = ({ habit }) => {
  const { state, dispatch } = useData();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(habit);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const toggleFunc = () => {
    setModal(!modal);
  };

  const saveHandler = (item) => {
    dispatch({
      type: "SET_HABITS_ARRAY",
      payload: state?.habitsArray.map((habit) =>
        habit.name === item.name ? data : habit
      ),
    });
    toggleFunc();
    // setData({});
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

  const addToArchive = (item) => {
    dispatch({
      type: "SET_HABITS_ARRAY",
      payload: state?.habitsArray.map((habit) =>
        habit.name === item.name ? { ...item, isArchive: true } : habit
      ),
    });
  };

  const deleteFunc = (item) => {
    dispatch({
      type: "SET_HABITS_ARRAY",
      payload: state?.habitsArray.filter((habit) => habit.name !== item.name),
    });
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <p>{habit.name}</p>
      <button onClick={() => deleteFunc(habit)}>delete</button>
      <button onClick={() => addToArchive(habit)}>ATA</button>
      <button onClick={toggleFunc}>edit</button>

      {modal && (
        <Popup
          content={
            <form onSubmit={() => saveHandler(habit)}>
              <input
                type="text"
                placeholder="task name"
                name="name"
                value={data.name}
                onChange={inputHandler}
              />
              <select value={data.repeat} name="repeat" onChange={inputHandler}>
                {Repeat.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select value={data.goals} name="goals" onChange={inputHandler}>
                {Goals.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select value={data.timeOfDay} name="tod" onChange={inputHandler}>
                {TimesOfDay.map((e) => (
                  <option key={e.label} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              <select
                value={data.startDate}
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

export default Card;
