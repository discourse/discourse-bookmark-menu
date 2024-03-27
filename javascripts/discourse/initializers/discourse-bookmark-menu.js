import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "discourse-bookmark-menu",

  initialize() {
    withPluginApi("0.10.1", (api) => {
      api.replacePostMenuButton("bookmark", {
        name: "discourse-bookmark-menu-shim",
        shouldRender: () => true,
        buildAttrs: (widget) => {
          return widget.attrs;
        },
      });
    });
  },
};
