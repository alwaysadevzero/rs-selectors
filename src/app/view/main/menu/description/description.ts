import styles from "./desciption.module.css";
import View from "../../../view";
import drawEvents from "../../../../util/events/drawEvents";
import { Description } from "./interface";

export default class DescriptionView extends View {
  private title!: View;

  private syntax!: View;

  private hint!: View;

  private example!: View;

  constructor() {
    super({
      className: styles.desciption,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners = () => {
    drawEvents.on.drawDescription(this.drawDescription);
  };

  private drawDescription = (params: Description) => {
    const { title, syntax, hint, example } = params;
    this.title.node.innerText = title;
    this.syntax.node.innerText = `syntax: ${syntax}`;
    this.hint.node.innerText = hint;
    this.example.node.innerText = `example: ${example}`;
  };

  private configureView = () => {
    const cont = new View({ className: styles.container });

    this.title = new View({ tag: "h4", className: styles.title });
    this.example = new View({ tag: "kbd", className: styles.syntax });
    this.hint = new View({ tag: "mark", className: styles.hint });
    this.syntax = new View({ tag: "button", className: styles.example });

    cont.append(this.title, this.example, this.syntax, this.hint);
    this.append(cont);
  };
}
