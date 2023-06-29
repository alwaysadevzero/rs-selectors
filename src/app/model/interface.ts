import { Level } from "../view/main/menu/levels/inteface";
import { Task } from "../data/interface";

export interface State extends Level, Task {
  title: string;
}
