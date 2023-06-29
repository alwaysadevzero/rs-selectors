import styles from "./levels.module.css";
import View from "../../../view";
import eventEmmiter from "../../../../util/eventEmmiter";
import LevelView from "./level/level";
import { Level } from "./inteface";
import { LevelStatus } from "../../../../model/enums";

export default class LevelsView extends View<"article"> {
  private levels!: View;

  constructor() {
    super({
      className: styles.levels,
    });
    this.configureView();
    this.addEventListeners();
  }
  addEventListeners(): void {
    eventEmmiter.on(
      eventEmmiter.events.DRAW_LEVELS,
      this.drawLevels.bind(this)
    );
  }

  private configureView() {
    const heading = new View({ content: "Choose a level" });

    this.levels = new View({ className: styles.levels });

    const resetButton = new View({
      className: styles.resetButton,
      tag: "button",
      content: "Reset Progress",
    });
    this.append(heading, this.levels, resetButton);
  }

  private isLevelParams(obj: unknown): obj is Level {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "status" in obj &&
      "name" in obj &&
      "position" in obj
    );
  }

  private drawLevels(levels: Level[]): void {
    if (
      !Array.isArray(levels) ||
      !levels.every((level) => this.isLevelParams(level))
    ) {
      throw new Error("invalid passed parameters to drawLevels");
    }
    while (this.levels.node.firstChild) {
      this.levels.node.removeChild(this.levels.node.firstChild);
    }

    levels.forEach((level) => this.levels.append(new LevelView(level)));
  }
}
