import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/ContextProvider";

const Archives = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();

  return (
    <div>
      <button onClick={() => navigate("/")}>home</button>

      <div style={{ display: "flex", gap: "2rem" }}>
        {state?.archiveArr.map((habit) => (
          <li
            key={habit.name_}
            style={{ width: "15rem", height: "5rem", border: "2px solid red" }}
          >
            {habit.name_}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Archives;
