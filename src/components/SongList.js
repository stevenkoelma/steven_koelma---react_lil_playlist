import React from "react";
import Song from "./Song";

const Songlist = (props) => {
  return (
    <div class="songlist">
      <table>
        <tr className="songlist__header">
          <th>Nummer</th>
          <th>Artiest</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>

        {props.songs.map((item) => (
          <Song song={item} key={item.id} />
        ))}
        <tr>
          <td>
            <button onClick={() => props.sortByTitle()}>
              Sorteer op nummer (A-Z){" "}
            </button>
          </td>
          <td>
            <button onClick={() => props.sortByRating()}>
              Sorteer op rating
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Songlist;
