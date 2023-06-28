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
    // const helpButton = new View<'button'>({content: 'Help', tag: 'button', className: styles.panelButton})
    // helpButton.setAttributes({'type': 'submit'})

    const editorHeader = new PanelView("CSS Editor", "Styles.css");
    const editorInput = new InputView();

    this.setAttributes({ "data-theme": "light" });

    // editorHeader.append(helpButton)
    // editorHeader.node.insertBefore(helpButton.node, editorHeader.node.querySelector('.panel__filename'));

    // const editorInput = new View<'input'>({tag: 'input', className: styles.panelButton})
    // editorInput.setAttributes({placeholder: 'Enter css selector'})
    this.append(editorHeader, editorInput);
  }
}
