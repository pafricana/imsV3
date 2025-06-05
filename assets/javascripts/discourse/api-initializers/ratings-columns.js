import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "ratings-columns",
  initialize() {
    withPluginApi("0.8.31", (api) => {
      api.addPostClassesCallback((attrs) => {
        const result = [];
        if (attrs.rating_type) {
          result.push(`rating-${attrs.rating_type}`);
        }
        return result;
      });

      const site = api.container.lookup("service:site");
      const columns = [
        { name: "importance", title: "Importance" },
        { name: "feasibility", title: "Feasibility" },
        { name: "sort", title: "Sort" }
      ];

      if (!site.topic_list_columns) {
        site.set("topic_list_columns", []);
      }
      site.topic_list_columns.pushObjects(columns);
    });
  }
};
