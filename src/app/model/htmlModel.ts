import Model from "./model";
import parserHtml from "../util/parserHtml";

class HtmlModel extends Model {
  public getHtml(): string {
    const htmlString = this.states[this.currentIndex].html;
    return htmlString;
  }
}

export default new HtmlModel();
