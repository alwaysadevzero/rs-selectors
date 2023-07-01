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
  };

  private updateLevels = () => {
    const levels = this.levelsModel.getLevels();
    const currentLevelIndex = this.levelsModel.currentIndex;
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, {
      currentLevelIndex,
      levels,
    });
  };

  private switchLevel = (level: Level) => {
    const newIndex = level.position - 1;
    const previosIndex = this.levelsModel.switchLevel(newIndex);
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, {
      previoisLevelIndex: previosIndex,
      newLevelIndex: newIndex,
    });
  };
}
