import { LevelStatus } from "../../../../model/enums";

export type levelParams = {
  status: LevelStatus;
  position?: number;
  name: string;
};
