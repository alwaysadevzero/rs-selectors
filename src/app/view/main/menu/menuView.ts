import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";
import eventEmmiter from "../../../util/eventEmmiter";

export default class menuView extends View<"article"> {
  private resetButton!: View;
  constructor() {
    super({
      tag: "article",
      className: styles.menu,
    });
    this.configureView();
    this.addEventListener();
  }

  private addEventListener(): void {
    this.resetButton.addListener("click", () => {
      eventEmmiter.emit(eventEmmiter.events.RESET_LEVELS);
    });
  }

  configureView(): void {
    const levels = new LevelsView();

    this.resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(levels, this.resetButton);
  }
}
