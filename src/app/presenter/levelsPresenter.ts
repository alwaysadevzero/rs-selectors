import LevelsModel from "../model/levelsModel";
import Presenter from "./presenter";
import { Level } from "../view/main/menu/levels/inteface";

export default class LevelPresenter extends Presenter {
  private levelsModel = new LevelsModel();

  constructor() {
    super();
    this.updateLevels();
    this.addListener();
  }

  private addListener = () => {
    this.eventEmmiter.on(
      this.eventEmmiter.events.SWITCH_LEVEL,
      this.switchLevel
    );
    this.eventEmmiter.on(
      this.eventEmmiter.events.PASSED_LEVEL,
      this.passedLevel
    );
  };

  private updateAll = (): void => {
    this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML);
    this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT);
    this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT);
  };

  private updateLevels = () => {
    const levels = this.levelsModel.getLevels();
    const currentLevelIndex = this.levelsModel.currentIndex;
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, {
      currentLevelIndex,
      levels,
    });
  };

  private emitSwitchLevelEvent = () => {
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, {
      previousLevelIndex: this.levelsModel.previousIndex,
      newLevelIndex: this.levelsModel.currentIndex,
    });
  };

  private switchLevel = (level: Level) => {
    const newIndex = level.position - 1;
    if (this.levelsModel.switchLevel(newIndex)) {
      this.emitSwitchLevelEvent();
      this.updateAll();
    }
  };

  private passedLevel = (): void => {
    this.levelsModel.passedLevel();
    setTimeout(this.nextLevel, 1000);
  };

  private nextLevel = (): void => {
    if (this.levelsModel.nextLevel()) {
      this.emitSwitchLevelEvent();
      this.updateAll();
    }
  };

  private previousLevel = (): void => {
    if (this.levelsModel.previousLevel()) {
      this.emitSwitchLevelEvent();
      this.updateAll();
    }
  };
}
