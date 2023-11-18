import LevelsModel from "../model/levelsModel";
import drawEvents from "../util/events/drawEvents";
import gameEvents from "../util/events/gameEvents";
import updateEvents from "../util/events/updateEvents";
import { Level } from "../view/main/menu/levels/inteface";

export default class LevelPresenter {
  private levelsModel = new LevelsModel();

  constructor() {
    this.updateLevels();
    this.updateProgress();
    this.addListener();
  }

  private addListener = () => {
    gameEvents.on.switchLevel(this.switchLevel);
    gameEvents.on.passLevel(this.passLevel);
    gameEvents.on.skipLevel(this.skipLevel);
    gameEvents.on.resetLevels(this.resetLevels);
    gameEvents.on.nextLevel(this.nextLevel);
    gameEvents.on.backLevel(this.previousLevel);

    updateEvents.on.updateLevels(this.updateLevels);
    updateEvents.on.updateProgress(this.updateProgress);
  };

  private updateLevels = () => {
    const levels = this.levelsModel.getLevels();
    const currentLevelIndex = this.levelsModel.currentIndex;
    drawEvents.emit.drawLevels(currentLevelIndex, levels);
  };

  private switchLevel = (level: Level) => {
    const newIndex = level.position - 1;
    if (this.levelsModel.switchLevel(newIndex)) {
      drawEvents.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      updateEvents.emit.updateAllWithoutLevel();
    }
  };

  private updateProgress = () => {
    const progress = this.levelsModel.getProgress();
    drawEvents.emit.drawProgress(progress);
  };

  private resetLevels = () => {
    this.levelsModel.resetLevels();
    updateEvents.emit.updateAll();
  };

  private passLevel = () => {
    this.levelsModel.passLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    const isLastLevelPassed = this.levelsModel.isLastLevelPassed();
    if (isLastLevelPassed) {
      gameEvents.emit.gameWin();
    }
    drawEvents.emit.drawLevelStatus({ status, index });
    setTimeout(this.nextLevel, 1000);
  };

  private skipLevel = () => {
    this.levelsModel.skipLevel();
    const status = this.levelsModel.getLevelStatus();
    const index = this.levelsModel.currentIndex;
    drawEvents.emit.drawLevelStatus({ status, index });
  };

  private nextLevel = () => {
    if (this.levelsModel.nextLevel()) {
      drawEvents.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      updateEvents.emit.updateAllWithoutLevel();
    }
  };

  private previousLevel = () => {
    if (this.levelsModel.previousLevel()) {
      drawEvents.emit.drawSwitchLevel(
        this.levelsModel.previousIndex,
        this.levelsModel.currentIndex
      );
      updateEvents.emit.updateAllWithoutLevel();
    }
  };
}
