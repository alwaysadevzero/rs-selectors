import Presenter from "./presenter";
import HtmlModel from "../model/htmlModel";

export default class HtmlPresenter extends Presenter {
  private htmlModel = new HtmlModel();

  constructor() {
    super();
    this.updateHtml();
    this.addListener();
  }

  private addListener = (): void => {
    this.on.updateHtml(this.updateHtml);
  };

  private updateHtml = (): void => {
    const htmlcode: string = this.htmlModel.getHtml();
    this.emit.drawHtml(htmlcode);
  };
}
