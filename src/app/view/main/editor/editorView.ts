import styles from "./editor.module.css";
import View from "../../view";
import PanelView from "../shared/panel/panelView";
import InputView from "./editorInput/editorInputView";

export default class EditorView extends View {
  constructor() {
    super({});
    this.configureView();
  }

  configureView() {
    const editorHeader = new PanelView("CSS Editor", "Styles.css");
    const editorInput = new InputView();

    this.setAttributes({ "data-theme": "light" });
    this.addClass(styles.editor);

    this.append(editorHeader, editorInput);
  }
}
