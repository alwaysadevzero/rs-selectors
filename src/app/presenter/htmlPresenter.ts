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
    this.eventEmmiter.on(this.eventEmmiter.events.UPADTE_HTML, this.updateHtml);
  };

  private updateHtml = (): void => {
    const htmlcode: string = this.htmlModel.getHtml();
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_HTML_CODE, htmlcode);
  };
}
