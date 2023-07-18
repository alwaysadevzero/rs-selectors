import styles from "./editorInput.module.css";
import View from "../../../view";
import drawEvents from "../../../../util/events/drawEvents";
import gameEvents from "../../../../util/events/gameEvents";

const LINES_NUMBER = 15;
const TEXT_AREA = [
  "",
  "",
  "{",
  "/* Styles would go here. */",
  "}",
  "",
  "/*",
  "Type a number to skip to a level.",
  'Ex → "5" for level 5',
  "*/",
];

export default class InputView extends View<"article"> {
  private enterButton!: View;

  private currentTimeout: NodeJS.Timeout | null = null;

  private input!: View;

  constructor() {
    super({
      tag: "article",
      className: styles.field,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners = (): void => {
    this.enterButton.addListener("click", () => this.checkAnswer());
    this.input.addListener("keypress", (event) => {
      const e = event as KeyboardEvent;
      if (e.key === "Enter") {
        this.checkAnswer();
      }
    });
    drawEvents.on.drawSkipLevel(this.drawSkipLevel);
    drawEvents.on.drawClearInput(this.clearInput);
    drawEvents.on.drawWrongAnswer(this.drawWrongAnswer);
  };

  private drawSkipLevel = (solution: string) => {
    (this.input.node as HTMLInputElement).value = "";
    let index = 0;

    if (this.currentTimeout !== null) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }

    const writeText = () => {
      if (index < solution.length) {
        (this.input.node as HTMLInputElement).value += solution.charAt(index);
        index += 1;

        this.currentTimeout = setTimeout(writeText, 80);
      } else {
        this.currentTimeout = null;
      }
    };

    writeText();
  };

  private drawWrongAnswer = () => {
    this.addClass(styles.wrongAnswer);
    setTimeout(() => {
      this.removeClass(styles.wrongAnswer);
    }, 500);
  };

  private clearInput = (): void => {
    (this.input.node as HTMLInputElement).value = "";
  };

  private checkAnswer = (): void => {
    const { value } = this.input.node as HTMLInputElement;
    if (value) {
      gameEvents.emit.checkAnswer(value);
    }
  };

  private configureView() {
    const input = new View<"input">({
      tag: "input",
      className: styles.input,
    });
    input.setAttributes({ maxlength: "30" });

    const lines = InputView.configureLines();
    lines.node.firstChild?.appendChild(input.node);

    const enterButton = new View<"button">({
      content: "Enter",
      tag: "button",
      className: styles.button,
    });
    this.input = input;
    this.enterButton = enterButton;

    this.append(lines, enterButton);
  }

  private static configureLines(lineCount?: number): View {
    const count = lineCount ?? LINES_NUMBER;
    const lines = new View<"div">({
      tag: "div",
      className: styles.lines,
    });

    for (let i = 0; i < count; i += 1) {
      const line = new View<"span">({
        tag: "span",
        className: styles.line,
      });

      if (i < TEXT_AREA.length) line.setContent(TEXT_AREA[i]);

      lines.append(line.node);
    }

    return lines;
  }
}
