import { hbs } from "ember-cli-htmlbars";
import { registerWidgetShim } from "discourse/widgets/render-glimmer";

registerWidgetShim(
  "discourse-bookmark-menu-shim",
  "div.discourse-bookmark-menu-shim",
  hbs`<Discourse::Bookmark::Menu @post={{@data}} />`
);
