import styles from "./result.module.css";
import "./result.css";
import View from "../../view";
import parserHtml from "../../../util/parserHtml";
import drawEvents from "../../../util/events/drawEvents";

export default class ResultView extends View<"article"> {
  private drawSection!: View;

  private target!: Element[];

  constructor() {
    super({
      tag: "article",
      className: styles.result,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners() {
    drawEvents.on.drawResult(this.drawResult);
    drawEvents.on.drawRightAnswer(this.drawRightAnswer);
  }

  private drawRightAnswer = () => {
    this.target.map((target) => target.classList.add("selected"));
  };

  private drawResult = (params: { htmlCode: string; solution: string }) => {
    this.drawSection.node.innerHTML = params.htmlCode;
    this.target = Array.from(
      this.drawSection.node.querySelectorAll(params.solution)
    );
    this.target.map((target) => target.classList.add("target"));
  };

  private configureView() {
    const table = new View({ className: styles.table });
    const tableEdge = new View({ className: styles["table-edge"] });
    this.drawSection = new View({ className: styles.section });

    table.append(tableEdge, this.drawSection);
    this.append(table);
  }
}
