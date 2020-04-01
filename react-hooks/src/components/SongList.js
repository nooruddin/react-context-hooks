import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: uuidv4(), track: "Yellow - ColdPlay" },
    { id: uuidv4(), track: "Papaoutai - Stromae" },
    { id: uuidv4(), track: "Desert Rose - Sting" }
  ]);

  const [age, setAge] = useState(20);

  const addSong = track => {
    setSongs([...songs, { id: uuidv4(), track }]);
  };

  // second parameter is all state data to watch for
  // useEffect is only called for changes to those state data
  useEffect(() => {
    console.log("useEffect hook ran for songs", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect hook ran for age", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.track}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
