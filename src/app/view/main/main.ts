import styles from "./main.module.css";
import "./main.css";
import parserHtml from "../../util/parserHtml";
import View from "../view";
import EditorView from "./editor/editorView";
import HtmlView from "./html/htmlView";
import MenuView from "./menu/menuView";
import ResultView from "./result/resultView";
// import modalView from "./modal/modal";

const footerRawHTML = `
  <div class="container">
      <ul class="footer__links">
          <li>
              <a href="https://rs.school/" class="contrast">© 2022 The Rolling Scopes</a>
          </li>
          <li>
              <a href="https://github.com/alwaysadevzero" class="contrast secondary">Author</a>
          </li>
          <li>
              <a href="" class="contrast">RS selectors 2023</a>
          </li>
      </ul>
  </div>`;

export default class MainView extends View {
  constructor() {
    const params = {
      className: styles.app,
    };
    super(params);

    this.configureView();
  }

  private configureView(): void {
    const leftSide = new View({ className: styles.leftSide });

    const title = new View({
      tag: "h1",
      className: styles.title,
      content: "RS Selectors",
    });

    const result = new ResultView();

    const wrapper = new View({ className: styles.wrapper });
    const editor = new EditorView();
    const html = new HtmlView();
    wrapper.append(editor, html);

    const footer = new View({ tag: "footer", className: styles.footer });
    footer.node.innerHTML = parserHtml.parse(footerRawHTML);
    leftSide.append(title, result, wrapper, footer);

    const rightSide = new View({ className: styles.rightSide });
    const menu = new MenuView();
    rightSide.append(menu);

    this.append(leftSide, rightSide);
  }
}
