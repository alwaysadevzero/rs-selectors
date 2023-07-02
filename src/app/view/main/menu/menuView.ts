import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";
import ProgressView from "./progress/progress";
import eventEmmiter from "../../../util/eventEmmiter";

export default class MenuView extends View<"article"> {
  private resetButton!: View;

  private progress!: View;

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

  private configureView(): void {
    const header = new View({ className: styles.header });
    const progress = new ProgressView();
    const levels = new LevelsView();

    header.append(progress);
    this.resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(header, levels, this.resetButton);
  }
}
