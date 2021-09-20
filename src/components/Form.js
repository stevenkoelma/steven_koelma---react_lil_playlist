import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: "",
      songArtist: "",
      songGenre: "",
      songRating: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const id = Math.random().toString(16).slice(2);
    const newSong = {
      id: id,
      title: this.state.songTitle,
      artist: this.state.songArtist,
      genre: this.state.songGenre,
      rating: this.state.songRating,
    };

    this.props.addSong(newSong);
    this.setState({
      songTitle: "",
      songArtist: "",
      songGenre: "",
      songRating: "",
    });
  }

  render() {
    return (
      <div className="form">
        <form className="form__fields">
          <input
            type="text"
            placeholder="Title"
            name="songTitle"
            value={this.state.songTitle}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Artist"
            name="songArtist"
            value={this.state.songArtist}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Genre"
            name="songGenre"
            value={this.state.songGenre}
            onChange={this.handleChange}
          ></input>
          <label>Rating:</label>
          <select
            onChange={this.handleChange}
            name="songRating"
            value={this.state.songRating}
            placeholder="Rating"
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={this.handleClick}>Add Song</button>
        </form>
      </div>
    );
  }
}

export default Form;
