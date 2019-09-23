import Controller from "@ember/controller";
import { empty } from "@ember/object/computed";
import Song from "rawre/models/song";

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: "",

  isAddButtonDisabled: empty("newSongTitle"),

  actions: {
    addSong() {
      this.set("isAddingSong", true);
    },
    cancelAddSong() {
      this.set("isAddingSong", false);
    },
    saveSong(evt) {
      evt.preventDefault();
      let newSong = Song.create({ title: this.newSongTitle });
      this.model.songs.pushObject(newSong);
      this.set("newSongTitle", "");
    },
    updateRating(song, rating) {
      song.set("rating", song.rating === rating ? 0 : rating);
    }
  },
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ""
    });
  }
});
