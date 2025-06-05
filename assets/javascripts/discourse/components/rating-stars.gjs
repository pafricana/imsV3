import Component from "@glimmer/component";
import { on } from "@ember/modifier";

export default class RatingStars extends Component {
  <template>
    <div class="rating-stars">
      {{#each (array 1 2 3 4 5) as |star|}}
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
}
