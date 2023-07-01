import styles from "./html.module.css";
import View from "../../view";
import PanelView from "../shared/panel/panelView";
import eventEmmiter from "../../../util/eventEmmiter";
import parserHtml from "../../../util/parserHtml";
import hljs from "highlight.js";
import "./highlights.css";

const LINES_NUMBER = 15;

export default class HtmlView extends View {
  private code!: View;
  private helpButton!: View;
  constructor() {
    super({});
    this.configureView();
    this.addEventListener();
  }

  private addEventListener() {
    eventEmmiter.on(eventEmmiter.events.DRAW_HTML_CODE, this.drawHtmlCode);

    this.helpButton.addListener("click", () =>
      eventEmmiter.emit(eventEmmiter.events.SKIP_LEVEL)
    );
  }

  private drawHtmlCode = (html: string): void => {
    this.code.node.innerHTML = "";
    // while (this.code.node.firstChild) {
    //   this.code.node.removeChild(this.code.node.firstChild);
    // }

    const highLightercode: string = hljs.highlight(html, {
      language: "html",
    }).value;

    const lines = highLightercode.split("\n");

    let wrappedCode = lines.map((line, index) => {
      return `<span class="line" data-line-number="${
        index + 1
      }">${line}</span>`;
    });

    for (let line = lines.length; line < LINES_NUMBER; line++) {
      wrappedCode.push(`<span class="line" data-line-number="${line}"></span>`);
    }

    const highLightedCode = wrappedCode.join("\n");
    this.code.node.innerHTML = parserHtml.parse(highLightedCode);
  };

  configureView() {
    this.addClass(styles.html);

    const editorHeader = new PanelView("HTML Viewer", "table.html");

    const htmlCode = new View({ tag: "article", className: styles.html });
    htmlCode.addClass(styles.htmlCode);

    const code = new View({ tag: "code", className: styles.code });
    this.code = new View({ tag: "pre", className: styles.pre });
    code.append(this.code);

    htmlCode.append(code);

    this.setAttributes({ "data-theme": "light" });

    this.helpButton = new View({
      tag: "button",
      className: styles.helpButton,
      content: "Help",
    });

    htmlCode.append(this.helpButton);

    this.append(editorHeader, htmlCode);
  }
}
