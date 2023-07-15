import styles from "./level.module.css";
import View from "../../../../view";
import { Level } from "../inteface";
import Semmiter from "../../../../../util/shorterEmmiter";
import { LevelStatus } from "../../../../../model/enums";

export default class LevelView extends View<"article"> {
  private level!: Level;

  private status!: LevelStatus;

  constructor(params: Level) {
    super({
      className: styles.level,
    });
    this.configureView(params);
    this.addEventListener();
  }

  public setStatus(status: LevelStatus) {
    this.removeClass(styles[this.status]);
    this.addClass(styles[status]);
    this.status = status;
  }

  public highLightLevel(): void {
    this.addClass(styles.active);
  }

  public removeHighLightLevel(): void {
    this.removeClass(styles.active);
  }

  private addEventListener(): void {
    this.addListener("click", () => {
      Semmiter.emit.switchLevel(this.level);
    });
  }

  private configureView(params: Level): void {
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
