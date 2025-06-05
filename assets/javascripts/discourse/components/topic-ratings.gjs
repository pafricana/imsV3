import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class TopicRatings extends Component {
  @service store;
  @tracked ratings;

  constructor() {
    super(...arguments);
    this.ratings = {
      importance: this.args.topic?.importance_rating || 0,
      feasibility: this.args.topic?.feasibility_rating || 0,
      sort: this.args.topic?.sort_value || 0
    };
  }

  <template>
    <div class="topic-ratings">
      <RatingStars
        @value={{this.ratings.importance}}
        @onChange={{this.onImportanceChange}}
      />
      <RatingStars
        @value={{this.ratings.feasibility}}
        @onChange={{this.onFeasibilityChange}}
      />
      <div class="sort-value">
        {{this.ratings.sort}}
      </div>
    </div>
  </template>

  @action
  onImportanceChange(value) {
    this.ratings.importance = value;
  }

  @action
  onFeasibilityChange(value) {
    this.ratings.feasibility = value;
  }
}
