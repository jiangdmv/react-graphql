import React from "react";
import useCharacter from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (error) {
    return <div>error wrong</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div>
        {data.character.episode.map((ele) => {
          return <div>{ele.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Character;
