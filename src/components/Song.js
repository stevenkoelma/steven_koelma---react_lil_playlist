import React from "react";

const Song = (props) => {
  const { id, title, artist, genre, rating } = props.song;
  console.log(props);
  return (
    <tr>
      <td>{title}</td>
      <td className="songlist__artist">{artist}</td>
      <td>{genre}</td>
      <td>{rating}</td>
    </tr>
  );
};

export default Song;
