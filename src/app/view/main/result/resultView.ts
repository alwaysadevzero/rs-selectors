import styles from "./result.module.css";
import "./result.css";
import View from "../../view";
import parserHtml from "../../../util/parserHtml";
import eventEmmiter from "../../../util/eventEmmiter";

export default class resultView extends View<"article"> {
  private drawSection!: View;
  constructor() {
    super({
      tag: "article",
      className: styles.result,
    });
    this.configureView();
    this.addEventListener();
  }

  private addEventListener(): void {
    eventEmmiter.on(eventEmmiter.events.DRAW_RESULT, this.drawResult);
  }

  private drawResult = (html: string): void => {
    console.log(this.drawResult);
    this.drawSection.node.innerHTML = parserHtml.parse(html, true);
  };

  configureView(): void {
    const table = new View({ className: styles.table });
    const tableEdge = new View({ className: styles["table-edge"] });
    this.drawSection = new View({ className: styles.section });

    table.append(tableEdge, this.drawSection);

    this.append(table);
  }
}
