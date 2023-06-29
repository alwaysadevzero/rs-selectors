import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";

export default class menuView extends View<"article"> {
  constructor() {
    super({
      tag: "article",
      className: styles.menu,
    });
    this.configureView();
  }

  configureView() {
    const levels = new LevelsView();

    const resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(levels, resetButton);
  }
}
