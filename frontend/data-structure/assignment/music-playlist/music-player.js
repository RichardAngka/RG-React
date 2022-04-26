const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO: answer here
    this.playlist.songs.push(song);
  }

  play() {
    // TODO: answer here
    if (this.playlist.songs.length == 0) {
      return "";
    }
    if (this.playlist.isRepeatable) {
      let nowPlay = this.playlist.songs.shift();
      this.playlist.songs.push(nowPlay);
      return `Now Playing ${nowPlay.singer} - ${nowPlay.title}`;
    } else {
      let nowPlay = this.playlist.songs.shift();
      return `Now Playing ${nowPlay.singer} - ${nowPlay.title}`;
    }
  }
};
