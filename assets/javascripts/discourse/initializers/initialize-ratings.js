import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "initialize-ratings",
  initialize() {
    withPluginApi("0.8.31", () => {
      // Plugin initialization
    });
  }
};
