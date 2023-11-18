import styles from "./menu.module.css";
import View from "../../view";
import LevelsView from "./levels/levelsView";
import ProgressView from "./progress/progress";
import DescriptionView from "./description/description";
import gameEvents from "../../../util/events/gameEvents";

export default class MenuView extends View<"article"> {
  private resetButton!: View;
  private description!: View;
  private levels!: View;

  constructor() {
    super({
      tag: "article",
      className: styles.menu,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners() {
    this.resetButton.addListener("click", () => {
      gameEvents.emit.resetLevels();
    });
    gameEvents.on.switchMenu(this.switchMenu);
  }

  private switchMenu = () => {
    this.levels.toggleClass(styles.displayNone);
    this.description.toggleClass(styles.displayNone);
  };

  private configureView() {
    const header = new View({ className: styles.header });
    const progress = new ProgressView();
    this.levels = new LevelsView();
    this.levels.addClass(styles.displayNone);
    this.description = new DescriptionView();

    header.append(progress);
    this.resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });

    this.append(header, this.description, this.levels, this.resetButton);
  }
}
