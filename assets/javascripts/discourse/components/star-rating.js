import Component from "@ember/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class StarRating extends Component {
  @tracked stars = [1, 2, 3, 4, 5];
  @tracked hoverRating = null;
  
  get displayRating() {
    return this.hoverRating || this.args.rating || 0;
  }

  @action
  setHoverRating(rating) {
    this.hoverRating = rating;
  }

  @action
  clearHoverRating() {
    this.hoverRating = null;
  }

  @action
  setRating(rating) {
    if (this.args.onRating) {
      this.args.onRating(rating);
    }
  }
}
