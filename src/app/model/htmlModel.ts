import Model from "./model";

export default class HtmlModel extends Model {
  protected htmlString!: string;

  public getHtml(): string {
    this.htmlString = this.states[this.currentIndex].html;
    return this.htmlString;
  }
}
