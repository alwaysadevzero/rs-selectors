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
    this.addClass(params.status);
    console.log(params);

    const position = new View({
      content: params.position?.toString(),
      tag: "span",
    });
    const levelName = new View({ tag: "span", content: params.name });

    this.append(position, levelName);
  }
}
