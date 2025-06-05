import { acceptance } from "discourse/tests/helpers/qunit-helpers";
import { visit } from "@ember/test-helpers";
import { test } from "qunit";

acceptance("Rating Columns", function (needs) {
  needs.user();
  needs.settings({
    imsv3_enabled: true
  });

  test("shows rating columns", async function (assert) {
    await visit("/latest");
    assert.dom(".topic-list th.posters::after").hasText("Importance");
    assert.dom(".topic-list th.posts::after").hasText("Feasibility");
    assert.dom(".topic-list th.activity::after").hasText("Sort");
  });
});
