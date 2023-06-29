import styles from "./level.module.css";
import View from "../../../../view";
import { Level } from "../inteface";

export default class LevelView extends View<"article"> {
  constructor(params: Level) {
    super({
      className: styles.level,
    });
    this.configureView(params);
  }

  configureView(params: Level) {
    const className = params.status;
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
