import React from "react";
import SongList from "./SongList";
import Form from "./Form";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          artist: "Martin Garrix",
          title: "We Are The People",
          genre: "House",
          rating: "4",
        },
        {
          id: 2,
          artist: "Lost Frequencies",
          title: "Rise",
          genre: "House",
          rating: "5",
        },
        {
          id: 3,
          artist: "Emmelie de Forest",
          title: "Only Teardrops",
          genre: "pop",
          rating: "3",
        },
      ],
    };
  }

  addSong = (song) => {
    this.setState({
      songs: [...this.state.songs].concat([song]),
    });
  };

  sortByTitle = () => {
    let songs = [...this.state.songs];
    let sortedSongs = songs.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    this.setState({
      songs: sortedSongs,
    });
  };

  sortByRating = () =>{
    let songs = [...this.state.songs]
    let sortedSongs = songs.sort((a,b) => b.rating - a.rating)
    this.setState({
        songs: sortedSongs
    })
}



  render() {
    return (
      <div>
        <Form addSong={this.addSong} />
        <SongList songs={this.state.songs} sortByTitle={this.sortByTitle} sortByRating={this.sortByRating}/>
      </div>
    );
  }
}

export default SongOverview;
