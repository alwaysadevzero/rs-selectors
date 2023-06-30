import Model from "./model";
import parserHtml from "../util/parserHtml";

class HtmlModel extends Model {
  public getHtml() {
    const htmlString = this.states[this.currentIndex].html;
    const html = parserHtml.parse(htmlString);
    return html;
  }
}

export default new HtmlModel();
