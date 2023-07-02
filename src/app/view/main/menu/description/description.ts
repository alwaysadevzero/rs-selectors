import styles from "./desciption.module.css";
import View from "../../../view";
import eventEmmiter from "../../../../util/eventEmmiter";
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
    this.addEventListener();
  }

  private addEventListener = (): void => {
    eventEmmiter.on(eventEmmiter.events.DRAW_DESCRIPTION, this.drawDescription);
  };

  private drawDescription = (params: Description): void => {
    const { title, syntax, hint, example } = params;
    this.title.node.innerText = title;
    this.syntax.node.innerText = `syntax: ${syntax}`;
    this.hint.node.innerText = hint;
    this.example.node.innerText = `example: ${example}`;
  };

  private configureView = (): void => {
    const cont = new View({ className: styles.container });

    const title = new View({ tag: "h4", className: styles.title });
    const syntax = new View({ tag: "kbd", className: styles.syntax });
    const hint = new View({ tag: "mark", className: styles.hint });
    const example = new View({ tag: "button", className: styles.example });

    cont.append(title, example, syntax, hint);
    this.append(cont);

    this.title = title;
    this.example = example;
    this.hint = hint;
    this.syntax = syntax;
  };
}
