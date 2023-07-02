import EventEmitter from "../util/eventEmmiter";
import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "../model/enums";
import { Description } from "../view/main/menu/description/interface";

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
    drawProgress: (params: { index: number; length: number }): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_PROGRESS, params),

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
    drawDescription: (params: Description): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_DESCRIPTION, params),

    updateDescription: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_DESCRIPTION),
    updateProgress: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_PROGRESS),
    updatepassLevel: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.PASSED_LEVEL),
    updateHtml: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML),
    updateResult: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT),
    updateLevels: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_LEVELS),

    clearInput: (): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT),
    updateAll: (): void => {
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_LEVELS);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPADTE_HTML);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_RESULT);
      this.eventEmmiter.emit(this.eventEmmiter.events.UPDATE_PROGRESS);
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT);
    },
    gameWin: (): void => {
      this.eventEmmiter.emit(this.eventEmmiter.events.GAME_WIN);
    },
  };

  protected on = {
    updateHtml: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPADTE_HTML, func),
    updateResult: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_RESULT, func),
    updateLevels: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_LEVELS, func),
    updateDescription: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_DESCRIPTION, func),
    checkAnswer: (func: (arg: string) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.CHECK_ANSWER, func),
    switchLevel: (func: (arg: Level) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.SWITCH_LEVEL, func),
    passLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.PASSED_LEVEL, func),
    skipLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.SKIP_LEVEL, func),
    resetLevels: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.RESET_LEVELS, func),
    updateProgress: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_PROGRESS, func),
    nextLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.NEXT_LEVEL, func),
    backLevel: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.BACK_LEVEL, func),
  };
}
