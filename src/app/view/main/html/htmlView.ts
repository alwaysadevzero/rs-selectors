import styles from "./html.module.css";
import View from "../../view";
import PanelView from "../shared/panel/panelView";
import eventEmmiter from "../../../util/eventEmmiter";

export default class HtmlView extends View {
  private code!: View;
  constructor() {
    super({});
    this.configureView();
    this.addEventListener();
  }

  private addEventListener() {
    eventEmmiter.on(eventEmmiter.events.DRAW_HTML_CODE, this.drawHtmlCode);
  }

  private drawHtmlCode = (html: HTMLElement): void => {
    this.code.node.innerText = html.outerHTML;
  };

  configureView() {
    this.addClass(styles.html);

    const editorHeader = new PanelView("HTML Viewer", "table.html");

    const htmlCode = new View({ tag: "article", className: "html" });
    htmlCode.addClass(styles.htmlCode);

    this.code = new View({ tag: "code", className: styles.code });

    htmlCode.append(this.code);

    this.setAttributes({ "data-theme": "light" });

    this.append(editorHeader, htmlCode);
  }
}
