export default function initializeRatingColumns(api) {
  api.addDiscoveryQueryParam('importance', { replace: true });
  api.addDiscoveryQueryParam('feasibility', { replace: true });
}
