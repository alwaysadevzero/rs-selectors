import { Level } from "../view/main/menu/levels/inteface";
import Model from "./model";

class LevelsModel extends Model {
  constructor() {
    super();
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
}

export default new LevelsModel();
