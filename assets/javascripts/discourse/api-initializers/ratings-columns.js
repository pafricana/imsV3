export default function initializeRatingColumns(api) {
  // Add custom fields
  api.addDiscoveryQueryParam('importance', { replace: true });
  api.addDiscoveryQueryParam('feasibility', { replace: true });

  // Add columns to topic list
  api.modifyClassStatic('model:topic-list', {
    importanceField: ['importance'],
    feasibilityField: ['feasibility']
  });

  // Add columns
  api.addColumnAfter("title", {
    id: "importance",
    name: "Importance",
    sortProperty: "importance"
  });

  api.addColumnAfter("importance", {
    id: "feasibility",
    name: "Feasibility",
    sortProperty: "feasibility"
  });
}
