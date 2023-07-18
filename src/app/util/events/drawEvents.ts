import EventEmitter from "../eventEmmiter";
import { Level } from "../../view/main/menu/levels/inteface";
import { LevelStatus } from "../../model/enums";
import { Description } from "../../view/main/menu/description/interface";

class DrawEvents {
  protected eventEmmiter = EventEmitter;

  public emit = {
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
    drawClearInput: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_CLEAR_INPUT),
  };

  public on = {
    drawSwitchLevel: (
      func: (params: {
        previousLevelIndex: number;
        newLevelIndex: number;
      }) => void
    ) => this.eventEmmiter.on(this.eventEmmiter.events.DRAW_SWITCH_LEVEL, func),
    drawLevels: (
      func: (params: { currentLevelIndex: number; levels: Level[] }) => void
    ) => this.eventEmmiter.on(this.eventEmmiter.events.DRAW_LEVELS, func),
    drawHtml: (func: (htmlCode: string) => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_HTML_CODE, func),
    drawSkipLevel: (func: (str: string) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_SKIP_LEVEL, func),
    drawDescription: (func: (desciption: Description) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_DESCRIPTION, func),
    drawLevelStatus: (
      func: (params: { status: LevelStatus; index: number }) => void
    ) => this.eventEmmiter.on(this.eventEmmiter.events.DRAW_LEVEL_STATUS, func),
    drawResult: (
      func: (params: { htmlCode: string; solution: string }) => void
    ) => this.eventEmmiter.on(this.eventEmmiter.events.DRAW_RESULT, func),
    drawRightAnswer: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_RIGHT_ANSWER, func),
    drawClearInput: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_CLEAR_INPUT, func),
    drawWrongAnswer: (func: () => void): void =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_WRONG_ANSWER, func),
    drawProgress: (func: (params: { index: number; length: number }) => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.DRAW_PROGRESS, func),
  };
}

export default new DrawEvents();
