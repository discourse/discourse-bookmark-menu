/* eslint-disable no-console */
import Component from "@glimmer/component";
import { action } from "@ember/object";
import discourseLater from "discourse-common/lib/later";

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
    discourseLater(() => {
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
