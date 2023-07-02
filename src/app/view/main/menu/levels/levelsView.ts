import styles from "./levels.module.css";
import View from "../../../view";
import eventEmmiter from "../../../../util/eventEmmiter";
import LevelView from "./level/level";
import { Level } from "./inteface";
import { LevelStatus } from "../../../../model/enums";

export default class LevelsView extends View<"article"> {
  private levelsWrapper = new View({ className: styles.levels });

  private levelsArr!: LevelView[];

  constructor() {
    super({
      className: styles.levels,
    });
    this.configureView();
    this.addEventListeners();
  }

  private addEventListeners = (): void => {
    eventEmmiter.on(eventEmmiter.events.DRAW_LEVELS, this.drawLevels);
    eventEmmiter.on(eventEmmiter.events.DRAW_SWITCH_LEVEL, this.switchLevel);
    eventEmmiter.on(
      eventEmmiter.events.DRAW_LEVEL_STATUS,
      this.changeLevelStatus
    );
  };

  private changeLevelStatus = (params: {
    status: LevelStatus;
    index: number;
  }) => {
    const { status, index } = params;
    this.levelsArr[index].setStatus(status);
  };

  private configureView = () => {
    const heading = new View({
      content: "Choose a level",
      className: styles.choose,
    });

    this.append(heading, this.levelsWrapper);
  };

  public static isLevelParams = (obj: unknown): obj is Level => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "status" in obj &&
      "name" in obj &&
      "position" in obj
    );
  };

  private switchLevel = (params: {
    previousLevelIndex: number;
    newLevelIndex: number;
  }): void => {
    const { previousLevelIndex, newLevelIndex } = params;
    this.levelsArr[previousLevelIndex].removeHighLightLevel();
    this.levelsArr[newLevelIndex].highLightLevel();
  };

  private drawLevels = (params: {
    currentLevelIndex: number;
    levels: Level[];
  }): void => {
    const { currentLevelIndex, levels } = params;

    if (
      !Array.isArray(levels) ||
      !levels.every((level) => LevelsView.isLevelParams(level))
    ) {
      throw new Error("invalid passed parameters to drawLevels");
    }
    this.levelsWrapper.node.innerHTML = "";
    this.levelsArr = [];

    for (let i = 0; i < levels.length; i += 1) {
      const lvl = new LevelView(levels[i]);
      if (i === currentLevelIndex) lvl.highLightLevel();
      this.levelsArr.push(lvl);
    }
    this.levelsWrapper.append(...this.levelsArr);
  };
}
