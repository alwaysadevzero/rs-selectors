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

  public switchLevel(index: number): boolean {
    if (index < this.states.length && index >= 0) {
      this.previousIndex = this.currentIndex;
      this.currentIndex = index;
      return true;
    }
    return false;
  }

  public passedLevel(): void {
    this.states[this.currentIndex].status = LevelStatus.PASSED;
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
