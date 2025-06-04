export default {
  name: "ratings-columns",
  initialize(container) {
    const store = container.lookup("service:store");
    const site = container.lookup("service:site");
    
    site.set("topics_columns", [
      ...site.topics_columns,
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

    store.addPlural("topic-rating");
  }
}

