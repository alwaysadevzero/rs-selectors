import Model from "../model/model";
import EventEmitter from "../util/eventEmmiter";

export default class Presenter {
  private model: Model;
  constructor(model: Model) {
    this.model = model;

    this.init();
  }

  private init() {
    this.addListeners();
  }

  addListeners() {
    EventEmitter.on(EventEmitter.events.CHECK_ANSWER, this.gg);
  }

  gg(...args: unknown[]): void {
    console.log(args);
  }
}
