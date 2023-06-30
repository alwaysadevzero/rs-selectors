import styles from "./level.module.css";
import View from "../../../../view";
import { Level } from "../inteface";
import eventEmmiter from "../../../../../util/eventEmmiter";

export default class LevelView extends View<"article"> {
  private level!: Level;
  constructor(params: Level) {
    super({
      className: styles.level,
    });
    this.configureView(params);
    this.addEventListener();
  }

  public highLightLevel(): void {
    this.addClass(styles.active);
  }

  public removeHighLightLevel(): void {
    this.removeClass(styles.active);
  }

  private addEventListener(): void {
    this.addListener("click", () => {
      eventEmmiter.emit(eventEmmiter.events.SWITCH_LEVEL, this.level);
    });
  }

  private configureView(params: Level): void {
    this.level = params;
    const className = params.status;
    console.log(className);
    this.addClass(styles[className]);

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
