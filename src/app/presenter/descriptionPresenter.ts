import updateEvents from "../util/events/updateEvents";
import drawEvents from "../util/events/drawEvents";
import DescriptionModel from "../model/descriptionModel";

export default class DescriptionPresenter {
  private descriptionModel = new DescriptionModel();

  constructor() {
    this.updateDescription();
    this.addListener();
  }

  private addListener = (): void => {
    updateEvents.on.updateDescription(this.updateDescription);
  };

  private updateDescription = (): void => {
    drawEvents.emit.drawDescription(this.descriptionModel.getDescription());
  };
}
