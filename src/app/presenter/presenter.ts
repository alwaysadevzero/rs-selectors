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
    clearInput: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT),
    drawLevelStatus: (params: { status: LevelStatus; index: number }): void =>
      this.eventEmmiter.emit(
        this.eventEmmiter.events.DRAW_LEVEL_STATUS,
        params
      ),
    drawRightAnswer: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RIGHT_ANSWER),
    drawWrongAnswer: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_WRONG_ANSWER),
    drawSwitchLevel: (prevIndex: number, newIndex: number): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, {
        previousLevelIndex: prevIndex,
        newLevelIndex: newIndex,
      }),
    drawLevels: (currentLevelIndex: number, levels: Level[]): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_LEVELS, {
        currentLevelIndex,
        levels,
      }),
    updatePassedLevel: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.PASSED_LEVEL),
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
    passedLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.PASSED_LEVEL, func),
  };
}
