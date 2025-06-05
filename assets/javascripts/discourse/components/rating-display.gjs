import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class RatingDisplay extends Component {
  @tracked stars;
  @tracked sortValue;

  constructor() {
    super(...arguments);
    this.stars = "★".repeat(this.args.value || 0);
    this.sortValue = this.args.value || 0;
  }
}
