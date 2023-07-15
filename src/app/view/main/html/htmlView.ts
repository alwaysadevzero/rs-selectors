import hljs from "highlight.js";
import styles from "./html.module.css";
import View from "../../view";
import PanelView from "../shared/panel/panelView";
import Semmiter from "../../../util/shorterEmmiter";
import parserHtml from "../../../util/parserHtml";
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
    Semmiter.on.drawHtml(this.drawHtmlCode);

    this.helpButton.addListener("click", () => Semmiter.emit.skipLevel());
  }

  private drawHtmlCode = (html: string): void => {
    this.code.node.innerHTML = "";

    const highLightercode: string = hljs.highlight(html, {
      language: "html",
    }).value;

    const lines = highLightercode.split("\n");

    const wrappedCode = lines.map((line, index) => {
      return `<span class="line" data-line-number="${
        index + 1
      }">${line}</span>`;
    });

    for (let line = lines.length; line < LINES_NUMBER; line += 1) {
      wrappedCode.push(`<span class="line" data-line-number="${line}"></span>`);
    }

    const highLightedCode = wrappedCode.join("\n");
    this.code.node.innerHTML = parserHtml.parse(highLightedCode);
  };

  private configureView() {
    this.addClass(styles.html);

    const editorHeader = new PanelView("HTML Viewer", "table.html");
    editorHeader.addClass(styles.panel);

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
