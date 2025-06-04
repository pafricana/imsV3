import { withPluginApi } from "discourse/lib/plugin-api";
import { renderRating } from "../lib/rating-utilities";

export default {
  name: "setup-ratings",
  initialize() {
    withPluginApi("0.8.31", api => {
      api.decorateWidget("topic-list-item:after", helper => {
        const topic = helper.attrs;
        return helper.attach("topic-rating", { topic });
      });
    });
  }
};
