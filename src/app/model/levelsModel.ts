import { Level } from "../view/main/menu/levels/inteface";
import { LevelStatus } from "./enums";
import Model from "./model";

class LevelsModel extends Model {
  constructor() {
    super();
  }
  get currentLevelIndex(): number {
    return this.currentStateIndex;
  }

  set currentLevelIndex(value: number) {
    this.currentStateIndex = value;
  }

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
      const previosIndex = this.currentLevelIndex;
      this.currentLevelIndex = index;
      return previosIndex;
    }
  }
}

export default new LevelsModel();
