import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";

export default class TopicRating extends Component {
  @tracked rating;

  constructor() {
    super(...arguments);
    this.rating = this.args.rating || 0;
  }

  @action
  async setRating(newRating) {
    try {
      await ajax(`/topics/${this.args.topic.id}/rate`, {
        type: "POST",
        data: {
          rating_type: this.args.type,
          value: newRating,
        },
      });
      this.rating = newRating;
    } catch (error) {
      console.error("Error setting rating:", error);
    }
  }

  get stars() {
    return [1, 2, 3, 4, 5].map((num) => ({
      value: num,
      filled: num <= this.rating,
    }));
  }
}
