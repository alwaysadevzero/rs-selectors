import LevelsModel from "../model/levelsModel";
import Presenter from "./presenter";
import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "../model/enums";

export default class LevelPresenter extends Presenter {
  private levelsModel = new LevelsModel();

  constructor() {
    super();
    this.updateLevels();
    this.addListener();
  }

  private addListener = () => {
    this.on.switchLevel(this.switchLevel);
    this.on.passedLevel(this.passedLevel);
  };

  private updateAll = (): void => {
    this.emit.updateHtml();
    this.emit.updateResult();
    this.emit.clearInput();
  };

  private updateLevels = () => {
    const levels = this.levelsModel.getLevels();
    const currentLevelIndex = this.levelsModel.currentIndex;
    this.emit.drawLevels(currentLevelIndex, levels);
  };

  private switchLevel = (level: Level): void => {
    const newIndex = level.position - 1;
    if (this.levelsModel.switchLevel(newIndex)) {
      this.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      this.updateAll();
    }
  };

  private passedLevel = (): void => {
    this.levelsModel.passedLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    this.emit.drawLevelStatus({ status, index });
    setTimeout(this.nextLevel, 1000);
  };

  private nextLevel = (): void => {
    if (this.levelsModel.nextLevel()) {
      this.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      this.updateAll();
    }
  };

  private previousLevel = (): void => {
    if (this.levelsModel.previousLevel()) {
      this.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      this.updateAll();
    }
  };
}
