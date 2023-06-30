import tasks from "../data/tasks";
import { LevelStatus } from "./enums";

import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;
  static states: State[];
  static currentIndex: number;

  get states(): State[] {
    return Model.states;
  }

  set states(states: State[]) {
    Model.states = states;
  }

  get currentIndex(): number {
    return Model.currentIndex;
  }

  set currentIndex(index: number) {
    Model.currentIndex = index;
  }

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
        { status: LevelStatus.PENDING, position: index + 1 },
        task
      );
    });
    this.currentIndex = 0;
    return state;
  };
}
