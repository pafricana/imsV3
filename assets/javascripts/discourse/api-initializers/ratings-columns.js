export default {
  name: "ratings-columns",
  initialize(container) {
    const site = container.lookup("service:site");
    if (!site.topics_columns) {
      site.set("topics_columns", []);
    }
    
    site.topics_columns.pushObjects([
      {
        name: "importance",
        title: "Importance",
        component: "star-rating"
      },
      {
        name: "feasibility",
        title: "Feasibility",
        component: "star-rating"
      }
    ]);
  }
}
