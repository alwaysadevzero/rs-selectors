import View from "../../../view";
import styles from "./panel.module.css";

export default class PanelView extends View {
  constructor(panelName: string, fileName: string) {
    const params = {
      className: styles.panel,
    };
    super(params);
    this.configureView(panelName, fileName);
  }

  private configureView(panelName: string, fileName: string) {
    const panelNameView = new View({ content: panelName });
    const fileNameView = new View({ content: fileName });
    this.append(panelNameView, fileNameView);
  }
}
