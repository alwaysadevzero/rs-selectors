import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";
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
    eventEmmiter.on(eventEmmiter.events.DRAW_PROGRESS, this.updateProgress);
  }

  private updateProgress = (params: {
    index: number;
    length: number;
  }): void => {
    const { index, length } = params;
    this.progress.setAttributes({
      value: `${index + 1}`,
      max: `${length}`,
    });
  };

  private configureView(): void {
    const header = new View({ className: styles.header });
    const levels = new LevelsView();
    const progress = new View({ tag: "progress", className: styles.progress });
    progress.setAttributes({ value: "0", max: "100" });

    header.append(progress);
    this.progress = progress;

    this.resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(header, levels, this.resetButton);
  }
}
