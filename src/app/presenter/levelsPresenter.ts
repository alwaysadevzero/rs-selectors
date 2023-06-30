import LevelsModel from "../model/levelsModel";
import Presenter from "./presenter";
import { Level } from "../view/main/menu/levels/inteface";

export default class LevelPresenter extends Presenter {
  constructor() {
    super();
    this.updateLevels();
    this.addListener();
  }
  private updateLevels = () => {
    const levels = LevelsModel.getLevels();
    const currentLevelIndex = LevelsModel.currentLevelIndex;
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, {
      currentLevelIndex,
      levels,
    });
  };

  private addListener = () => {
    this.eventEmmiter.on(
      this.eventEmmiter.events.SWITCH_LEVEL,
      this.switchLevel
    );
  };

  private switchLevel = (level: Level) => {
    const newIndex = level.position - 1;
    const previosIndex = LevelsModel.switchLevel(newIndex);
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, {
      previoisLevelIndex: previosIndex,
      newLevelIndex: newIndex,
    });
  };
}
