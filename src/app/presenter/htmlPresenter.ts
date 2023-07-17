import updateEvents from "../util/events/updateEvents";
import drawEvents from "../util/events/drawEvents";
import HtmlModel from "../model/htmlModel";

export default class HtmlPresenter {
  private htmlModel = new HtmlModel();

  constructor() {
    this.updateHtml();
    this.addListener();
  }

  private addListener = (): void => {
    updateEvents.on.updateHtml(this.updateHtml);
  };

  private updateHtml = (): void => {
    const htmlcode: string = this.htmlModel.getHtml();
    drawEvents.emit.drawHtml(htmlcode);
  };
}
