import styles from "./levels.module.css";
import View from "../../../view";
import drawEvents from "../../../../util/events/drawEvents";
import LevelView from "./level/level";
import { Level } from "./inteface";
import { LevelStatus } from "../../../../model/enums";

export default class LevelsView extends View {
  private levelsWrapper = new View({ className: styles.levels });

  private levelsArr!: LevelView[];

  constructor() {
    super({
      className: styles.levelsWrapper,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners = () => {
    drawEvents.on.drawLevels(this.drawLevels);
    drawEvents.on.drawSwitchLevel(this.switchLevel);
    drawEvents.on.drawLevelStatus(this.changeLevelStatus);
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
  }) => {
    const { previousLevelIndex, newLevelIndex } = params;
    this.levelsArr[previousLevelIndex].removeHighLightLevel();
    this.levelsArr[newLevelIndex].highLightLevel();
  };

  private drawLevels = (params: {
    currentLevelIndex: number;
    levels: Level[];
  }) => {
    const { currentLevelIndex, levels } = params;

    if (
      !Array.isArray(levels) ||
      !levels.every((level) => LevelsView.isLevelParams(level))
    ) {
      throw new Error("invalid passed parameters to drawLevels");
    }
    this.levelsWrapper.node.innerHTML = "";

    this.levelsArr = levels.map((level, index): LevelView => {
      const lvl = new LevelView(level);
      if (index === currentLevelIndex) lvl.highLightLevel();
      return lvl;
    });

    this.levelsWrapper.append(...this.levelsArr);
  };
}
