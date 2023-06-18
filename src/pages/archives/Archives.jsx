import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/ContextProvider";
import Card from "../../component/card/Card";

const Archives = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();
  const archive = state?.habitsArray.filter((habit) => habit.isArchive);

  return (
    <div>
      <button onClick={() => navigate("/")}>home</button>

      <div style={{ display: "flex", gap: "2rem" }}>
        {archive?.map((habit) => (
          <Card habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Archives;
