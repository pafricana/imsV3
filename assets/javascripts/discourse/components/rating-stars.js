import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class RatingStars extends Component {
  get starRange() {
    return [1, 2, 3, 4, 5];
  }

  @action
  onRate(value) {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
