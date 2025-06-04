import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.34", (api) => {
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    // Remove views
    columns.delete("views");
    
    // Move importance to posters column
    columns.replace("posters", {
      header: { template: "Importance" },
      item: columns.get("replies").item
    });
    
    // Move feasibility to replies column
    columns.replace("replies", {
      header: { template: "Feasibility" },
      item: columns.get("activity").item
    });
    
    // Keep activity column for potential Sort rating
    columns.replace("activity", {
      header: { template: "Sort" },
      item: columns.get("activity").item
    });

    return columns;
  });
});
