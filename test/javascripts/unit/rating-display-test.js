import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Component | rating-display", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const component = this.owner.factoryFor("component:rating-display");
    assert.ok(component);
  });

  test("it computes stars correctly", function (assert) {
    const component = this.owner.factoryFor("component:rating-display").create({
      value: 3
    });
    assert.equal(component.stars, "★★★");
  });
});
