import EventEmitter from "../util/eventEmmiter";
import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "../model/enums";

export default class Presenter {
  protected eventEmmiter = EventEmitter;

  protected emit = {
    drawHtml: (htmlCode: string): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_HTML_CODE, htmlCode),
    drawResult: (htmlCode: string): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RESULT, htmlCode),
    drawRightAnswer: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RIGHT_ANSWER),
    drawWrongAnswer: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_WRONG_ANSWER),
    drawSwitchLevel: (prevIndex: number, newIndex: number): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, {
        previousLevelIndex: prevIndex,
        newLevelIndex: newIndex,
      }),
    drawLevelStatus: (params: { status: LevelStatus; index: number }): void =>
      this.eventEmmiter.emit(
        this.eventEmmiter.events.DRAW_LEVEL_STATUS,
        params
      ),
    drawLevels: (currentLevelIndex: number, levels: Level[]): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, {
        currentLevelIndex,
        levels,
      }),

    updatepassLevel: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.PASSED_LEVEL),
    updateHtml: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML),
    updateResult: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT),
    clearInput: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT),
  };
  protected on = {
    updateHtml: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPADTE_HTML, func),
    updateResult: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_RESULT, func),
    checkAnswer: (func: (arg: string) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.CHECK_ANSWER, func),
    switchLevel: (func: (arg: Level) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.SWITCH_LEVEL, func),
    passLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.PASSED_LEVEL, func),
    skipLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.SKIP_LEVEL, func),
  };
}
