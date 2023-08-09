import { ajax } from "discourse/lib/ajax";

import Component from "@glimmer/component";
import { action } from "@ember/object";
import { createPopper } from "@popperjs/core";
import { tracked } from "@glimmer/tracking";
import { schedule } from "@ember/runloop";
import tippy from "tippy.js";
import { hideOnEscapePlugin } from "discourse/lib/d-popover";
import Bookmark from "discourse/models/bookmark";
import { inject as service } from "@ember/service";

export default class DiscourseBookmarkMenu extends Component {
  reminderAtOptions = [
    { id: 1, name: "In two hours" },
    { id: 2, name: "Tomorrow" },
    { id: 3, name: "In three days" },
    { id: 4, name: "Custom" },
    { id: 5, name: "No reminder", class: "-no-reminder", autofocus: true },
  ];

  @action
  autoFocusButton(option, target) {
    Ember.run.later(() => {
      console.log(option, target);
      if (option.autofocus) {
        target.focus();
      }
    }, 500);
  }

  @action
  onBookmark() {
    console.log("on bookmark");
  }

  @action
  onEditReminder() {
    console.log("on edit reminder");
  }

  @action
  onRemoveBookmark() {
    console.log("on remove bookmark");
  }

  @action
  onChooseOption(option) {
    console.log(option);
  }
}
