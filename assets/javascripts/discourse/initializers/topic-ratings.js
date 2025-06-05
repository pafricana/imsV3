import { withPluginApi } from "discourse/lib/plugin-api";
import TopicRatingsService from "../services/topic-ratings";

export default {
  name: "topic-ratings",
  initialize(container) {
    container.register("service:topic-ratings", TopicRatingsService);
    
    withPluginApi("1.6.0", api => {
      api.addTopicListColumn({
        name: "importance",
        position: "after",
        reference: "title"
      });
      
      api.addTopicListColumn({
        name: "feasibility",
        position: "after",
        reference: "importance"
      });
      
      api.addTopicListColumn({
        name: "sort",
        position: "after",
        reference: "feasibility"
      });
    });
  }
};
