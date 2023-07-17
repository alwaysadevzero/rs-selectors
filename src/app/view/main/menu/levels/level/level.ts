import styles from "./level.module.css";
import View from "../../../../view";
import { Level } from "../inteface";
import gameEvents from "../../../../../util/events/gameEvents";
import { LevelStatus } from "../../../../../model/enums";

export default class LevelView extends View<"article"> {
  private level!: Level;

  private status!: LevelStatus;

  constructor(params: Level) {
    super({
      className: styles.level,
    });
    this.configureView(params);
    this.initListeners();
  }

  private initListeners() {
    this.addListener("click", () => {
      gameEvents.emit.switchLevel(this.level);
    });
  }

  public setStatus(status: LevelStatus) {
    this.removeClass(styles[this.status]);
    this.addClass(styles[status]);
    this.status = status;
  }

  public highLightLevel() {
    this.addClass(styles.active);
  }

  public removeHighLightLevel() {
    this.removeClass(styles.active);
  }

  private configureView(params: Level) {
    this.level = params;
    this.status = params.status;
    this.addClass(styles[this.status]);

    const position = new View({
      content: params.position?.toString(),
      tag: "span",
      className: styles.position,
    });
    const levelName = new View({
      tag: "span",
      content: params.name,
      className: styles.name,
    });

    this.append(position, levelName);
  }
}
