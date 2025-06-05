import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "ratings-columns",
  initialize() {
    withPluginApi("0.8.31", api => {
      const site = api.container.lookup("service:site");
      
      if (!site.topic_list_columns) {
        site.set("topic_list_columns", []);
      }
      
      site.topic_list_columns.pushObjects([
        {
          name: "importance",
          title: "Importance"
        },
        {
          name: "feasibility",
          title: "Feasibility"
        },
        {
          name: "sort",
          title: "Sort"
        }
      ]);
    });
  }
}
