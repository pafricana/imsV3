import { action } from "@ember/object";
import { ajax } from "discourse/lib/ajax";

export default {
  setupComponent(args, component) {
    component.set("setRating", async function(topicId, ratingType, value) {
      try {
        await ajax(`/topics/${topicId}/rate`, {
          type: "POST",
          data: {
            rating_type: ratingType,
            value: value
          }
        });
        // Refresh the page to show new rating
        window.location.reload();
      } catch (error) {
        console.error("Error setting rating:", error);
      }
    });
  },

  @action
  async handleClick(event) {
    const target = event.target;
    const cell = target.closest("td");
    if (!cell) return;

    const row = cell.closest("tr");
    const topicId = row.dataset.topicId;

    if (cell.classList.contains("posters")) {
      // Handle importance rating
      const rating = Math.ceil((event.offsetX / cell.offsetWidth) * 5);
      await this.setRating(topicId, "importance", rating);
    } else if (cell.classList.contains("posts")) {
      // Handle feasibility rating
      const rating = Math.ceil((event.offsetX / cell.offsetWidth) * 5);
      await this.setRating(topicId, "feasibility", rating);
    } else if (cell.classList.contains("activity")) {
      // Handle sort rating
      const rating = Math.ceil((event.offsetX / cell.offsetWidth) * 5);
      await this.setRating(topicId, "sort", rating);
    }
  }
};
