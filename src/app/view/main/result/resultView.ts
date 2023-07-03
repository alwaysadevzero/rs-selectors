import styles from "./result.module.css";
import "./result.css";
import View from "../../view";
import parserHtml from "../../../util/parserHtml";
import eventEmmiter from "../../../util/eventEmmiter";

export default class ResultView extends View<"article"> {
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

  private drawResult = (params: {
    htmlCode: string;
    solution: string;
  }): void => {
    this.drawSection.node.innerHTML = params.htmlCode;
    const target = this.drawSection.node.querySelectorAll(params.solution);
    console.log(target);
    console.log(params.solution);
    Array.from(target).map((target) => target.classList.add("target"));
  };

  private configureView(): void {
    const table = new View({ className: styles.table });
    const tableEdge = new View({ className: styles["table-edge"] });
    this.drawSection = new View({ className: styles.section });

    table.append(tableEdge, this.drawSection);

    this.append(table);
  }
}
