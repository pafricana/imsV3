import { acceptance } from "discourse/tests/helpers/qunit-helpers";
import { strict as templateMode } from "discourse/lib/ember-template";
import { test } from "qunit";
import { visit } from "@ember/test-helpers";

acceptance("IMS v3", function (needs) {
  needs.user();
  needs.settings({
    imsv3_enabled: true
  });

  test("shows rating columns", async function (assert) {
    await visit("/latest");
    assert.dom(".topic-list th.posters").exists("shows importance column");
    assert.dom(".topic-list th.posts").exists("shows feasibility column");
    assert.dom(".topic-list th.activity").exists("shows sort column");
  });
});
