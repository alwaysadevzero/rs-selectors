import Model from "../model/model";
import EventEmitter from "../util/eventEmmiter";

export default class Presenter {
  private model: Model;
  constructor(model: Model) {
    this.model = model;

    this.init();
  }

  private init() {
    this.model.loadSetup();
    this.updateLevels();
  }

  private updateLevels() {
    const levels = this.model.getLevels();
    EventEmitter.emit(EventEmitter.events.DRAW_LEVELS, levels);
  }
}
