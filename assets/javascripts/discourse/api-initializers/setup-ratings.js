import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "setup-ratings",
  initialize() {
    withPluginApi("1.6.0", (api) => {
      api.modifyClass("model:topic", {
        pluginId: "imsv3",
        
        setRating(type, value) {
          return this.store.find("rating", {
            topic_id: this.id,
            type: type,
            value: value
          });
        }
      });
    });
  }
};
