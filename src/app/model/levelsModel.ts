import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "./enums";
import Model from "./model";

export default class LevelsModel extends Model {
  public previousIndex: number = 0;

  public getLevels(): Level[] {
    return this.states.map((state) => {
      return {
        status: state.status,
        position: state.position,
        name: state.name,
      };
    });
  }

  public getProgress(): { index: number; length: number } {
    return { index: this.currentIndex, length: this.states.length };
  }

  public resetLevels(): void {
    for (const state of this.states) {
      state.status = LevelStatus.PENDING;
    }
    this.currentIndex = 0;
  }

  public getLevelStatus(index?: number): LevelStatus {
    const ind = index || this.currentIndex;
    return this.states[ind].status;
  }

  public switchLevel(index: number): boolean {
    if (index < this.states.length && index >= 0) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index;
      return true;
    }
    return false;
  }

  public isLastLevelPassed(): boolean {
    const lastlevel: LevelStatus = this.states[this.states.length - 1].status;
    if (lastlevel === LevelStatus.PASSED || lastlevel === LevelStatus.SKIPPED) {
      return true;
    }
    return false;
  }

  public passLevel(): void {
    if (this.states[this.currentIndex].status !== LevelStatus.SKIPPED)
      this.states[this.currentIndex].status = LevelStatus.PASSED;
  }

  public skipLevel(): void {
    this.states[this.currentIndex].status = LevelStatus.SKIPPED;
  }

  public nextLevel(): boolean {
    if (this.currentIndex < this.states.length - 1) {
      return this.switchLevel(this.currentIndex + 1);
    }
    return false;
  }

  public previousLevel(): boolean {
    if (this.currentIndex > 0) {
      return this.switchLevel(this.currentIndex - 1);
    }
    return false;
  }
}
