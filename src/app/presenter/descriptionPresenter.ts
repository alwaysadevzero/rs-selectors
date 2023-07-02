import Presenter from "./presenter";
import DescriptionModel from "../model/descriptionModel";

export default class DescriptionPresenter extends Presenter {
  private descriptionModel = new DescriptionModel();

  constructor() {
    super();
    this.updateDescription();
    this.addListener();
  }

  private addListener = (): void => {
    this.on.updateDescription(this.updateDescription);
  };

  private updateDescription = (): void => {
    this.emit.drawDescription(this.descriptionModel.getDescription());
  };
}
