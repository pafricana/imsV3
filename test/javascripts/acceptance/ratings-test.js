import { acceptance, exists } from "discourse/tests/helpers/qunit-helpers";

acceptance("IMS v3", function (needs) {
  needs.user();
  needs.settings({
    imsv3_enabled: true
  });

  test("shows rating columns", async function (assert) {
    await visit("/latest");
    assert.ok(exists(".topic-list th.posters"), "shows importance column");
    assert.ok(exists(".topic-list th.posts"), "shows feasibility column");
    assert.ok(exists(".topic-list th.activity"), "shows sort column");
  });
});
