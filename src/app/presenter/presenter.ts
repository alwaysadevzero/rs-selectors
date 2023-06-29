import Model from "../model/model";
import EventEmitter from "../util/eventEmmiter";

export default class Presenter {
  private model: Model;
  constructor(model: Model) {
    this.model = model;

    this.init();
  }

  private init() {
    // this.addListeners();
    this.updateLevels();
  }

  private updateLevels() {
    EventEmitter.emit(EventEmitter.events.DRAW_LEVELS, this.model.levels);
  }

//   private addListeners() {
//     EventEmitter.on(EventEmitter.events.CHECK_ANSWER, this.gg);
//   }
}
