import tasks from "../data/tasks";
import { LevelStatus } from "./enums";

import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;

  protected static states: State[];

  protected static currentIndex: number;

  public get states(): State[] {
    return Model.states;
  }

  public set states(states: State[]) {
    Model.states = states;
  }

  public get currentIndex(): number {
    return Model.currentIndex;
  }

  public set currentIndex(index: number) {
    Model.currentIndex = index;
  }

  public loadStates = (): State[] => {
    const savedStates = localStorage.getItem("states");
    const savedIndex = localStorage.getItem("currentIndex");

    if (savedStates && savedStates !== "undefined") {
      this.states = JSON.parse(savedStates);
    } else {
      this.states = this.firstload();
    }

    if (savedIndex && savedIndex !== "undefined") {
      this.currentIndex = JSON.parse(savedIndex);
    } else {
      this.currentIndex = 0;
    }

    return this.states;
  };

  public saveStates = (): void => {
    const states = JSON.stringify(this.states);
    localStorage.setItem("states", states);

    const currentIndex = JSON.stringify(this.currentIndex);
    localStorage.setItem("currentIndex", currentIndex);
    console.log(currentIndex);
  };

  private firstload = (): State[] => {
    const state = this.tasks.map((task, index) => {
      return {
        status: LevelStatus.PENDING,
        position: index + 1,
        ...task,
      };
    });

    return state;
  };
}
