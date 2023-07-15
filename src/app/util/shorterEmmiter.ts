import EventEmitter from "./eventEmmiter";
import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "../model/enums";
import { Description } from "../view/main/menu/description/interface";

class Semmiter {
  protected eventEmmiter = EventEmitter;

  public emit = {
    switchLevel: (level: Level) =>
      this.eventEmmiter.emit(this.eventEmmiter.events.SWITCH_LEVEL, level),
    skipLevel: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.SKIP_LEVEL),
    drawHtml: (htmlCode: string): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_HTML_CODE, htmlCode),
    drawResult: (params: { htmlCode: string; solution: string }): void =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RESULT, params),
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
    drawSkipLevel: (solution: string) =>
      this.eventEmmiter.emit(
        this.eventEmmiter.events.DRAW_SKIP_LEVEL,
        solution
      ),
    drawDescription: (params: Description) =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_DESCRIPTION, params),
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
    clearInput: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.CLEAR_INPUT),
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
    gameWin: () => {
      this.eventEmmiter.emit(this.eventEmmiter.events.GAME_WIN);
    },
  };

  public on = {
    drawHtml: (func: (htmlCode: string) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_HTML_CODE, func),
    clearInput: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.CLEAR_INPUT, func),
    drawSkipLevel: (func: (str: string) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_SKIP_LEVEL, func),
    updateHtml: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPADTE_HTML, func),
    updateResult: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_RESULT, func),
    updateLevels: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_LEVELS, func),
    updateDescription: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_DESCRIPTION, func),
    checkAnswer: (func: (arg: string) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.CHECK_ANSWER, func),
    switchLevel: (func: (arg: Level) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.SWITCH_LEVEL, func),
    passLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.PASSED_LEVEL, func),
    skipLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.SKIP_LEVEL, func),
    resetLevels: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.RESET_LEVELS, func),
    updateProgress: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.UPDATE_PROGRESS, func),
    nextLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.NEXT_LEVEL, func),
    backLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.BACK_LEVEL, func),
  };
}

export default new Semmiter();
