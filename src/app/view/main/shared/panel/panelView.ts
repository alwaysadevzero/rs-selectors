import View from "../../../view";
import styles from "./panel.module.css";

// enum CssClasses {
//   PANEL_TEMPLATE = "panel",
// }

export default class PanelView extends View {
  constructor(panelName: string, fileName: string) {
    const params = {
      className: styles.panel,
    };
    super(params);
    this.configureView(panelName, fileName);
  }

  private configureView(panelName: string, fileName: string) {
    if (panelName) {
      const panelNameView = new View({ content: panelName });
      // panelNameView.addClass(CssClasses.PANEL_NAME);
      this.append(panelNameView);
    }

    if (fileName) {
      const fileNameView = new View({ content: fileName });
      // fileNameView.addClass(CssClasses.PANEL_FILENAME);
      this.append(fileNameView);
    }
  }
}
