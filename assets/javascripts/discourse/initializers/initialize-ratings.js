import { withPluginApi } from "discourse/lib/plugin-api";
import { strict as templateMode } from "discourse/lib/ember-template";

export default {
  name: "initialize-ratings",
  initialize() {
    templateMode();
    withPluginApi("0.8.31", () => {});
  }
};
