import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Mirage", duration: "4:15" },
    { title: "Crown the King", duration: "3:45" },
    { title: "Drip", duration: "3:05" },
    { title: "Old Town Road", duration: "2:43" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
