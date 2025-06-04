import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class StarRating extends Component {
  @tracked rating;

  get stars() {
    return Array.from({ length: 5 }, (_, i) => ({
      value: i + 1,
      filled: (i + 1) <= (this.args.rating || 0)
    }));
  }

  @action
  setRating(value) {
    if (this.args.onChange) {
      this.args.onChange(value);
    }
  }
}
