import styles from "./level.module.css";
import View from "../../../../view";
import { levelParams } from "../types";

export default class LevelView extends View<"article"> {
  constructor(params: levelParams) {
    super({
      className: styles.level,
    });
    this.configureView(params);
  }

  configureView(params: levelParams) {
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
