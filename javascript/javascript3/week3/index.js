//   .then = await

class Song {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.song = [];
  }

  addSong(song) {
    this.song.push(song);
  }
}

const mySong = new Song("Song number one", "pop", "HYF");
const myOtherSong = new Song("Song number Two", "rock", "HYF");

const myPlaylist = new Playlist("Party Songs");
myPlaylist.addSong(mySong);
console.log(myPlaylist);
