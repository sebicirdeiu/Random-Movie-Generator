import React from "react";
import { genresMap } from "./GenreMap";

export function Form(props) {
  return (
    <form className="form">
      <label htmlFor="genre">
        Genre:
        <select
          id="genre"
          value={props.genre} // controled inputs
          onChange={(event) => props.handleGenreChange(event.target.value)}
        >
          <option value={""}>Oricare</option>
          {genresMap.map((genre) => {
            return (
              <option value={genre.id} key={genre.id}>
                {genre.genre}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
}
