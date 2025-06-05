import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import RatingStars from "./rating-stars";

export default class TopicRatings extends Component {
  @tracked importance = 0;
  @tracked feasibility = 0;

  <template>
    <div class="topic-ratings">
      <RatingStars 
        @value={{this.importance}}
        @onChange={{this.updateImportance}}
      />
      <RatingStars
        @value={{this.feasibility}}
        @onChange={{this.updateFeasibility}}
      />
    </div>
  </template>

  updateImportance = (value) => {
    this.importance = value;
  };

  updateFeasibility = (value) => {
    this.feasibility = value;
  };
}
