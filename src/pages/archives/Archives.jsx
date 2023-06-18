import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/ContextProvider";
import Card from "../../component/card/Card";

const Archives = () => {
  const { state, dispatch } = useData();
  const archive = state?.habitsArray.filter((habit) => habit.isArchive);

  return (
    <div>
      <Link to="/">home</Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        {archive?.map((habit) => (
          <Card habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default Archives;
