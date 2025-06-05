import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";

export default class RatingStars extends Component {
  @tracked rating;

  <template>
    <div class="rating-stars">
      {{#each this.starRange as |star|}}
        <span
          class="star {{if (lte @value star) 'filled'}}"
          role="button"
          {{on "click" (fn @onChange star)}}
        >
          ★
        </span>
      {{/each}}
    </div>
  </template>

  get starRange() {
    return [1, 2, 3, 4, 5];
  }
}
