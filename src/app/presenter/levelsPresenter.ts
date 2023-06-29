import LevelsModel from "../model/levelsModel";
import Presenter from "./presenter";

export default class LevelPresenter extends Presenter {
  constructor() {
    super();
    this.updateLevels();
  }
  private updateLevels() {
    const levels = LevelsModel.getLevels();
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, levels);
  }
}
