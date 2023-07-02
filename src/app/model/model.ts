import tasks from "../data/tasks";
import { LevelStatus } from "./enums";

import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;

  protected static states: State[];

  protected static currentIndex: number;

  // eslint-disable-next-line class-methods-use-this
  public get states(): State[] {
    return Model.states;
  }

  // eslint-disable-next-line class-methods-use-this
  public set states(states: State[]) {
    Model.states = states;
  }

  // eslint-disable-next-line class-methods-use-this
  public get currentIndex(): number {
    return Model.currentIndex;
  }

  // eslint-disable-next-line class-methods-use-this
  public set currentIndex(index: number) {
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
    return this.firstload();
  };

  private firstload = (): State[] => {
    const state = this.tasks.map((task, index) => {
      return {
        status: LevelStatus.PENDING,
        position: index + 1,
        ...task,
      };
    });
    this.currentIndex = 0;
    return state;
  };
}
