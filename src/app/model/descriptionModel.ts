import Model from "./model";
import { Description } from "../view/main/menu/description/interface";

export default class DescriptionModel extends Model {
  public getDescription(): Description {
    const state = this.states[this.currentIndex];

    return {
      title: state.title,
      syntax: state.syntax,
      hint: state.hint,
      example: state.example,
    };
  }
}
