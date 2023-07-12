import Semmiter from "../util/shorterEmmiter";
import HtmlModel from "../model/htmlModel";

export default class HtmlPresenter {
  private htmlModel = new HtmlModel();

  constructor() {
    this.updateHtml();
    this.addListener();
  }

  private addListener = (): void => {
    Semmiter.on.updateHtml(this.updateHtml);
  };

  private updateHtml = (): void => {
    const htmlcode: string = this.htmlModel.getHtml();
    Semmiter.emit.drawHtml(htmlcode);
  };
}
