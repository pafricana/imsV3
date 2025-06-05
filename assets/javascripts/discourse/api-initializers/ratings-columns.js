import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "ratings-columns",
  initialize() {
    withPluginApi("1.6.0", (api) => {
      const site = api.container.lookup("service:site");
      
      if (!site.topic_list_columns) {
        site.set("topic_list_columns", []);
      }
      
      site.topic_list_columns.pushObjects([{
        name: "importance",
        title: "Importance",
        hidden: false
      }, {
        name: "feasibility",
        title: "Feasibility",
        hidden: false
      }, {
        name: "sort",
        title: "Sort",
        hidden: false
      }]);
    });
  }
};
