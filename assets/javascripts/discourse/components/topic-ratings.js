import Component from "@glimmer/component";
import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";

export default class TopicRatings extends Component {
  @action
  async setRating(topicId, ratingType, value) {
    try {
      await ajax(`/topics/${topicId}/rate`, {
        type: "POST",
        data: {
          rating_type: ratingType,
          value: value
        }
      });
      window.location.reload();
    } catch (error) {
      console.error("Error setting rating:", error);
    }
  }

  @action
  handleClick(event) {
    const cell = event.target.closest("td");
    if (!cell) return;

    const topicId = cell.closest("tr").dataset.topicId;
    const rating = Math.ceil((event.offsetX / cell.offsetWidth) * 5);

    if (cell.classList.contains("posters")) {
      this.setRating(topicId, "importance", rating);
    } else if (cell.classList.contains("posts")) {
      this.setRating(topicId, "feasibility", rating);
    } else if (cell.classList.contains("activity")) {
      this.setRating(topicId, "sort", rating);
    }
  }
}
