import Component from "@ember/component";
import { computed } from "@ember/object";
export default Component.extend({
  classNames: ["rating-panel"],

  rating: 0,
  maxRating: 5,
  onClick() {},
  stars: computed("rating", "maxRating", function() {
    let stars = [];
    for (let index = 1; index < this.maxRating; index++) {
      stars.push({ rating: index, isFull: this.rating >= index });
    }

    return stars;
  }),
  actions: {
    setRating(newRating) {
      return this.onClick(newRating);
    }
  }
});
