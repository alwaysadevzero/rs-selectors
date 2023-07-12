import Semmiter from "../util/shorterEmmiter";
import DescriptionModel from "../model/descriptionModel";

export default class DescriptionPresenter {
  private descriptionModel = new DescriptionModel();

  constructor() {
    this.updateDescription();
    this.addListener();
  }

  private addListener = (): void => {
    Semmiter.on.updateDescription(this.updateDescription);
  };

  private updateDescription = (): void => {
    Semmiter.emit.drawDescription(this.descriptionModel.getDescription());
  };
}
