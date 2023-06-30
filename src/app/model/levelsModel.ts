import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "./enums";
import Model from "./model";

export default class LevelsModel extends Model {
  public getLevels(): Level[] {
    return this.states.map((state) => {
      return {
        status: state.status,
        position: state.position,
        name: state.name,
      };
    });
  }

  public switchLevel(index: number): number | undefined {
    const length = this.states.length;

    if (index <= length && index >= 0) {
      const previosIndex = this.currentIndex;

      this.currentIndex = index;
      return previosIndex;
    }
  }
}
