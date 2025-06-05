export default {
  name: "ratings-columns",
  initialize(container) {
    const store = container.lookup("service:store");
    const site = container.lookup("service:site");
    
    if (!site.get("topic_list_columns")) {
      site.set("topic_list_columns", []);
    }
    
    site.topic_list_columns.pushObjects([
      {
        name: "importance",
        heading: "Importance"
      },
      {
        name: "feasibility",
        heading: "Feasibility"
      },
      {
        name: "sort",
        heading: "Sort"
      }
    ]);
  }
}
