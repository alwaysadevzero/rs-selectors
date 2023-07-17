import EventEmitter from "../eventEmmiter";

class UpdateEvents {
  protected eventEmmiter = EventEmitter;

  public emit = {
    updateDescription: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_DESCRIPTION),
    updateProgress: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_PROGRESS),
    updatepassLevel: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.PASSED_LEVEL),
    updateHtml: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML),
    updateResult: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT),
    updateLevels: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_LEVELS),
    updateAll: () => {
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_LEVELS);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_PROGRESS);
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_DESCRIPTION);
    },
    updateAllWithoutLevel: () => {
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_PROGRESS);
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_DESCRIPTION);
    },
  };

  public on = {
    updateHtml: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPADTE_HTML, func),
    updateResult: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_RESULT, func),
    updateLevels: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_LEVELS, func),
    updateDescription: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_DESCRIPTION, func),
    updateProgress: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_PROGRESS, func),
  };
}

export default new UpdateEvents();
