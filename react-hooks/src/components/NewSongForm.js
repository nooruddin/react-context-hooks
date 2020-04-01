import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [song, setSong] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addSong(song);
        setSong("");
      }}
    >
      <label htmlFor="songName">Song Name:</label>
      <input
        type="text"
        required
        name="songName"
        id="songName"
        value={song}
        onChange={changeEvent => setSong(changeEvent.target.value)}
      />
      <button>Add Song</button>
    </form>
  );
};

export default NewSongForm;
