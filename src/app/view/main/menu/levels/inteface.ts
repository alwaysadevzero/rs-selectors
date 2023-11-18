import { LevelStatus } from "../../../../model/enums";

export interface Level {
  status: LevelStatus;
  position: number;
  name: string;
}
