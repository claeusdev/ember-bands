import Route from "@ember/routing/route";
import { A } from "@ember/array";
import Song from "rawre/models/song";
import Band from "rawre/models/band";

export default Route.extend({
  model() {
    let blackDog = Song.create({
      title: "Black Dog",
      band: "Led Zeppelin",
      rating: 3
    });

    let yellowLedbetter = Song.create({
      title: "Yellow Ledbetter",
      band: "Pearl Jam",
      rating: 4
    });

    let pretender = Song.create({
      title: "The pretender",
      band: "Foo figthers",
      rating: 2
    });
    let ledZeppelin = Band.create({
      name: "Led Zeppelin",
      songs: A([blackDog])
    });
    let pearlJam = Band.create({
      name: "Pearl Jam",
      description:
        "Pearl Jam is an American rock band, formed in Seattle, Washington in 1990.",
      songs: A([yellowLedbetter])
    });
    let fooFigthers = Band.create({
      name: "Foo Figthers",
      songs: A([pretender])
    });

    return A([ledZeppelin, fooFigthers, pearlJam]);
  },
  actions: {
    didTransition() {
      document.title = "Bands - Rock & Roll";
    }
  }
});
