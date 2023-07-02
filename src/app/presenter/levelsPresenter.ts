import LevelsModel from "../model/levelsModel";
import Presenter from "./presenter";
import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "../model/enums";

export default class LevelPresenter extends Presenter {
  private levelsModel = new LevelsModel();

  constructor() {
    super();
    this.updateLevels();
    this.updateProgress();
    this.addListener();
  }

  private addListener = () => {
    this.on.switchLevel(this.switchLevel);
    this.on.passLevel(this.passLevel);
    this.on.skipLevel(this.skipLevel);
    this.on.resetLevels(this.resetLevels);
    this.on.updateLevels(this.updateLevels);
    this.on.updateProgress(this.updateProgress);
    this.on.nextLevel(this.nextLevel);
    this.on.backLevel(this.previousLevel);
  };

  private updateAll = (): void => {
    this.emit.updateHtml();
    this.emit.updateResult();
    this.emit.clearInput();
    this.emit.updateProgress();
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

  private updateProgress = (): void => {
    const progress = this.levelsModel.getProgress();
    this.emit.drawProgress(progress);
  };

  private resetLevels = (): void => {
    this.levelsModel.resetLevels();
    this.emit.updateAll();
  };

  private passLevel = (): void => {
    this.levelsModel.passLevel();
    const status: LevelStatus = this.levelsModel.getLevelStatus();
    const index: number = this.levelsModel.currentIndex;
    const isLastLevelPassed = this.levelsModel.isLastLevelPassed();
    if (isLastLevelPassed) {
      this.emit.gameWin();
    }
    this.emit.drawLevelStatus({ status, index });
    setTimeout(this.nextLevel, 1000);
  };

  private skipLevel = (): void => {
    this.levelsModel.skipLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    this.emit.drawLevelStatus({ status, index });
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
