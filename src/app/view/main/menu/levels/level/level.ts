import styles from "./level.module.css";
import View from "../../../../view";
import { levelParams } from "./typesView";

export default class LevelView extends View<"article"> {
  constructor(params: levelParams) {
    super({
      className: styles.level,
    });
    this.configureView(params);
  }

  configureView(params: levelParams) {
    this.addClass(params.status);

    const position = new View({
      content: params.position?.toString(),
      tag: "span",
    });
    const levelName = new View({ tag: "span", content: params.levelName });

    this.append(position, levelName);
  }
}
