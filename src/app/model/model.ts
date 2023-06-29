import tasks from "../data/tasks";
import { LevelStatus } from "./enums";

import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;
  protected states!: State[];

  constructor() {
    this.loadStates();
  }

  public loadStates(): State[] {
    if (!this.states) {
      this.states = this.loadSetup();
    }
    return this.states;
  }

  public loadSetup = () => {
    const states = localStorage.getItem("states") || "";
    if (states) {
      return JSON.parse(states);
    }
    return this.firstload(this.tasks);
  };

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
