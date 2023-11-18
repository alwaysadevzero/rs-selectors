import updateEvents from "../util/events/updateEvents";
import drawEvents from "../util/events/drawEvents";
import DescriptionModel from "../model/descriptionModel";

export default class DescriptionPresenter {
  private descriptionModel = new DescriptionModel();

  constructor() {
    this.updateDescription();
    this.addListener();
  }

  private addListener = () => {
    updateEvents.on.updateDescription(this.updateDescription);
  };

  private updateDescription = () => {
    drawEvents.emit.drawDescription(this.descriptionModel.getDescription());
  };
}
