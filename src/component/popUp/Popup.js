import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export const Popup = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "#00000050",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "600px",
          margin: "0 auto",
          height: "auto",
          maxHeight: "70vh",
          marginTop: "calc(100vh - 85vh - 20px)",
          background: "#fff",
          borderRadius: "4px",
          padding: "60px",
          border: "1px solid #999",
        }}
      >
        <span
          onClick={props.handleClose}
          style={{
            content: "x",
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "red",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            lineHeight: "20px",
            textAlign: "center",
            border: "1px solid #999",
            fontSize: "20px",
          }}
        >
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

// const navigate = useNavigate();
// const { state, dispatch } = useData();
// const [name, setName] = useState("");
// const [repeat, setRepeat] = useState("Daily");
// const [goals, setGoals] = useState("1 times Daily");
// const [timeOfDay, setTimeOfDay] = useState("Any time");
// const [startDate, setStartDate] = useState("Today");
// const [habit, setHabit] = useState({
//   // id: "",
//   name_: "",
//   repeat_: "",
//   goals_: "",
//   tod_: "",
//   startDate_: "",
// });

// const saveHandler = () => {
//   setHabit({
//     // id: uuidv4(),
//     name_: name,
//     repeat_: repeat,
//     goals_: goals,
//     tod_: timeOfDay,
//     startDate_: startDate,
//     isArchive_: false,
//   });

//   dispatch({
//     type: "SET_HABITS_ARRAY",
//     payload: [...state?.habitsArray, habit],
//   });
//   setName("");
//   // navigate("/");
// };

// const Repeat = [
//   { label: "Daily", value: "Daily" },
//   { label: "Weekly", value: "Weekly" },
//   { label: "Monthly", value: "Monthly" },
// ];
// const Goals = [
//   { label: "1 times Daily", value: "1 times Daily" },
//   { label: "2 times Daily", value: "2 times Daily" },
//   { label: "3 times Daily", value: "3 times Daily" },
// ];
// const TimesOfDay = [
//   { label: "Any time", value: "Any time" },
//   { label: "Morning", value: "Morning" },
//   { label: "Evening", value: "Evening" },
// ];
// const StartDate = [
//   { label: "Today", value: "Today" },
//   { label: "Tomorrow", value: "Tomorrow" },
//   { label: "Now", value: "Now" },
// ];

// console.log(habit);
// console.log(state);

{
  /* <button onClick={() => navigate("/")}>home</button>

        <input
          type="text"
          placeholder="task name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <select
          value={repeat}
          onChange={(event) => setRepeat(event.target.value)}
        >
          {Repeat.map((e) => (
            <option key={e.label} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
        <select
          value={goals}
          onChange={(event) => setGoals(event.target.value)}
        >
          {Goals.map((e) => (
            <option key={e.label} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
        <select
          value={timeOfDay}
          onChange={(event) => setTimeOfDay(event.target.value)}
        >
          {TimesOfDay.map((e) => (
            <option key={e.label} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
        <select
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        >
          {StartDate.map((e) => (
            <option key={e.label} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
        <button onClick={saveHandler}>save</button> */
}
