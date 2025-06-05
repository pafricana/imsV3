import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Topic Ratings", function (needs) {
  needs.user();
  needs.settings({
    imsv3_enabled: true
  });

  test("shows rating columns", async function (assert) {
    await visit("/latest");

    assert.dom(".topic-list th[data-sort-column='importance']").exists();
    assert.dom(".topic-list th[data-sort-column='feasibility']").exists();
    assert.dom(".topic-list th[data-sort-column='sort']").exists();
  });
});
