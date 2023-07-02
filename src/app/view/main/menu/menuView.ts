import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";
import DescriptionView from "./description/description";
import eventEmmiter from "../../../util/eventEmmiter";

export default class MenuView extends View<"article"> {
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

  private configureView(): void {
    const levels = new LevelsView();
    const description = new DescriptionView();

    this.resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(description, levels, this.resetButton);
  }
}
