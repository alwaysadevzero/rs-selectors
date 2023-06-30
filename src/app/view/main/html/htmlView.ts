import styles from "./html.module.css";
import View from "../../view";
import PanelView from "../shared/panel/panelView";
import eventEmmiter from "../../../util/eventEmmiter";
import parserHtml from "../../../util/parserHtml";
import hljs from "highlight.js";
import "./highlights.css";

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
    while (this.code.node.firstChild) {
      this.code.node.removeChild(this.code.node.firstChild);
    }

    const highLighterClass = hljs.highlight(html.outerHTML, {
      language: "html",
    });

    // const node = parserHtml.parse(highLighterClass.value);

    console.log(html);
    console.log(highLighterClass.value);
    // console.log(node);
    this.code.node.innerHTML = highLighterClass.value;
  };

  configureView() {
    this.addClass(styles.html);

    const editorHeader = new PanelView("HTML Viewer", "table.html");

    const htmlCode = new View({ tag: "article", className: "html" });
    htmlCode.addClass(styles.htmlCode);

    const code = new View({ tag: "code", className: styles.code });
    this.code = new View({ tag: "pre", className: styles.pre });
    code.append(this.code);

    htmlCode.append(code);

    this.setAttributes({ "data-theme": "light" });

    this.append(editorHeader, htmlCode);
  }
}
