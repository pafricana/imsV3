import { withPluginApi } from "discourse/lib/plugin-api";
import { strict as templateMode } from "discourse/lib/ember-template";

export default {
  name: "ratings-columns",
  initialize() {
    withPluginApi("0.8.31", (api) => {
      const site = api.container.lookup("service:site");
      site.set("topic_list_columns", [{
        name: "importance",
        title: "Importance"
      }, {
        name: "feasibility",
        title: "Feasibility"
      }, {
        name: "sort",
        title: "Sort"
      }]);
    });
  }
};
