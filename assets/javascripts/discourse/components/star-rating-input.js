import Component from "@ember/component";
import { action } from "@ember/object";

export default Component.extend({
  tagName: "span",
  classNames: ["star-rating"],
  stars: [1, 2, 3, 4, 5],
  rating: 0,
  hoveredRating: null,

  @action
  setRating(rating) {
    this.set("rating", rating);
    if (this.onRating) {
      this.onRating(rating);
    }
  },

  @action
  setHovered(rating) {
    this.set("hoveredRating", rating);
  },

  @action
  clearHovered() {
    this.set("hoveredRating", null);
  }
});
