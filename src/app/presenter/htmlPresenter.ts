import Presenter from "./presenter";
import HtmlModel from "../model/htmlModel";

export default class HtmlPresenter extends Presenter {
  constructor() {
    super();
    this.updateHtml();
    this.addListener();
  }

  private addListener = (): void => {
    this.eventEmmiter.on(
      this.eventEmmiter.events.SWITCH_LEVEL,
      this.updateHtml
    );
  };

  private updateHtml = (): void => {
    const htmlcode: string = HtmlModel.getHtml();
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_HTML_CODE, htmlcode);
  };
}
