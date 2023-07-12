import LevelsModel from "../model/levelsModel";
import Semmiter from "../util/shorterEmmiter";
import { Level } from "../view/main/menu/levels/inteface";

export default class LevelPresenter {
  private levelsModel = new LevelsModel();

  constructor() {
    this.updateLevels();
    this.updateProgress();
    this.addListener();
  }

  private addListener = () => {
    Semmiter.on.switchLevel(this.switchLevel);
    Semmiter.on.passLevel(this.passLevel);
    Semmiter.on.skipLevel(this.skipLevel);
    Semmiter.on.resetLevels(this.resetLevels);
    Semmiter.on.updateLevels(this.updateLevels);
    Semmiter.on.updateProgress(this.updateProgress);
    Semmiter.on.nextLevel(this.nextLevel);
    Semmiter.on.backLevel(this.previousLevel);
  };

  private updateLevels = () => {
    const levels = this.levelsModel.getLevels();
    const currentLevelIndex = this.levelsModel.currentIndex;
    Semmiter.emit.drawLevels(currentLevelIndex, levels);
  };

  private switchLevel = (level: Level) => {
    const newIndex = level.position - 1;
    if (this.levelsModel.switchLevel(newIndex)) {
      Semmiter.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      Semmiter.updateAllWithoutLevel();
    }
  };

  private updateProgress = () => {
    const progress = this.levelsModel.getProgress();
    Semmiter.emit.drawProgress(progress);
  };

  private resetLevels = () => {
    this.levelsModel.resetLevels();
    Semmiter.emit.updateAll();
  };

  private passLevel = () => {
    this.levelsModel.passLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    const isLastLevelPassed = this.levelsModel.isLastLevelPassed();
    if (isLastLevelPassed) {
      Semmiter.emit.gameWin();
    }
    Semmiter.emit.drawLevelStatus({ status, index });
    setTimeout(this.nextLevel, 1000);
  };

  private skipLevel = () => {
    this.levelsModel.skipLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    Semmiter.emit.drawLevelStatus({ status, index });
  };

  private nextLevel = () => {
    if (this.levelsModel.nextLevel()) {
      Semmiter.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      Semmiter.emit.updateAllWithoutLevel();
    }
  };

  private previousLevel = () => {
    if (this.levelsModel.previousLevel()) {
      Semmiter.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      Semmiter.emit.updateAllWithoutLevel();
    }
  };
}
