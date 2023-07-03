import tasks from "../data/tasks";
import { LevelStatus } from "./enums";

import { Task } from "../data/interface";
import { State } from "./interface";

export default class Model {
  private tasks: Task[] = tasks;

  protected static states: State[];

  protected static currentIndex: number;

  constructor() {
    this.loadGame();
  }

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

  public loadGame(): void {
    this.states = this.loadStates();
    this.currentIndex = this.loadIndex();
  }

  public saveGame = (): void => {
    const states = JSON.stringify(this.states);
    localStorage.setItem("states", states);

    const currentIndex = JSON.stringify(this.currentIndex);
    localStorage.setItem("currentIndex", currentIndex);
  };

  private loadIndex(index?: number): number {
    if (index) return index;
    if (this.currentIndex) return this.currentIndex;
    const savedIndex = localStorage.getItem("currentIndex");
    let ind;
    if (savedIndex && savedIndex !== "undefined") {
      ind = JSON.parse(savedIndex);
    } else {
      ind = 0;
    }
    return ind;
  }

  private loadStates = (): State[] => {
    if (!this.states) {
      const savedStates = localStorage.getItem("states");
      if (
        savedStates &&
        savedStates !== "undefined" &&
        savedStates !== "null"
      ) {
        this.states = JSON.parse(savedStates);
      } else {
        this.states = this.firstload();
      }
    }
    return this.states;
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
