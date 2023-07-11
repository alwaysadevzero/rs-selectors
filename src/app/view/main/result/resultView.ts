import styles from "./result.module.css";
import "./result.css";
import View from "../../view";
import parserHtml from "../../../util/parserHtml";
import eventEmmiter from "../../../util/eventEmmiter";

export default class ResultView extends View<"article"> {
  private drawSection!: View;

  private target!: Element[];

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
    eventEmmiter.on(
      eventEmmiter.events.DRAW_RIGHT_ANSWER,
      this.drawRightAnswer
    );
  }

  private drawRightAnswer = () => {
    this.target.map((target) => target.classList.add("selected"));
  };

  private drawResult = (params: {
    htmlCode: string;
    solution: string;
  }): void => {
    this.drawSection.node.innerHTML = params.htmlCode;
    this.target = Array.from(
      this.drawSection.node.querySelectorAll(params.solution)
    );
    this.target.map((target) => target.classList.add("target"));
  };

  private configureView(): void {
    const table = new View({ className: styles.table });
    const tableEdge = new View({ className: styles["table-edge"] });
    this.drawSection = new View({ className: styles.section });

    table.append(tableEdge, this.drawSection);

    this.append(table);
  }
}
