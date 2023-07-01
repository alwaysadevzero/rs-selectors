import styles from "./result.module.css";
import View from "../../view";

export default class resultView extends View<"article"> {
  constructor() {
    super({
      tag: "article",
      className: styles.result,
    });
    this.configureView();
  }

  configureView() {
    const table = new View({ className: styles.table });
    const tableEdge = new View({ className: styles["table-edge"] });
    table.append(tableEdge);

    this.append(table);
  }
}
