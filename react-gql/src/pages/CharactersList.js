import React from "react";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>spiner</div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div className="Char">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
