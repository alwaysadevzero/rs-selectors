import EventEmitter from "../eventEmmiter";
import { Level } from "../../view/main/menu/levels/inteface";

class GameEvents {
  protected eventEmmiter = EventEmitter;

  public emit = {
    switchLevel: (level: Level) =>
      this.eventEmmiter.emit(this.eventEmmiter.events.SWITCH_LEVEL, level),
    skipLevel: () =>
      this.eventEmmiter.emit(this.eventEmmiter.events.SKIP_LEVEL),
    gameWin: () => {
      this.eventEmmiter.emit(this.eventEmmiter.events.GAME_WIN);
    },
  };

  public on = {
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
    nextLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.NEXT_LEVEL, func),
    backLevel: (func: () => void) =>
      this.eventEmmiter.on(this.eventEmmiter.events.BACK_LEVEL, func),
  };
}

export default new GameEventsEmmiter();
