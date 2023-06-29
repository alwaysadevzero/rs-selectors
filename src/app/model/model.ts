import tasks from "../data/tasks";
import { LevelStatus } from "./enums";
import { Level } from "../view/main/menu/levels/inteface";
import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;
  private states!: State[];

  public loadSetup = () => {
    const states = localStorage.getItem("states") || "";
    if (states) {
      this.states = JSON.parse(states);
      return;
    }
    this.states = this.firstload(this.tasks);
    console.log(this.states);
  };

  public getLevels(): Level[] {
    return this.states.map((state) => {
      return {
        status: state.status,
        position: state.position,
        name: state.name,
      };
    });
  }

  private firstload = (tasks: Task[]): State[] => {
    const state = this.tasks.map((task, index) => {
      return Object.assign(
        { status: LevelStatus.UNUSED, position: index },
        task
      );
    });
    state[0].status = LevelStatus.CURRENT;
    return state;
  };
}
