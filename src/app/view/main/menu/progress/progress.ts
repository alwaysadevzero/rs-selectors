import View from "../../../view";
import styles from "./progress.module.css";
import eventEmmiter from "../../../../util/eventEmmiter";

export default class ProgressView extends View {
  private progress!: View;

  private levelTittle!: View;

  private nextButton!: View;

  private backButton!: View;

  private burger!: View;

  constructor() {
    super({
      className: styles.progress,
    });
    this.configureView();
    this.initListeners();
  }

  private initListeners() {
    eventEmmiter.on(eventEmmiter.events.DRAW_PROGRESS, this.updateProgress);

    this.burger.addListener("click", () =>
      eventEmmiter.emit(eventEmmiter.events.SWITCH_MENU)
    );

    this.nextButton.addListener("click", () => {
      eventEmmiter.emit(eventEmmiter.events.NEXT_LEVEL);
    });
    this.backButton.addListener("click", () => {
      eventEmmiter.emit(eventEmmiter.events.BACK_LEVEL);
    });
  }

  private updateProgress = (params: {
    index: number;
    length: number;
  }): void => {
    const { index, length } = params;
    this.progress.setAttributes({
      value: `${index + 1}`,
      max: `${length}`,
    });
    this.levelTittle.setContent(`Level ${index + 1} of ${length}`);
  };

  private configureView() {
    const progress = new View({ tag: "progress", className: styles.progress });
    progress.setAttributes({ value: "0", max: "100" });

    const backButton = new View({
      tag: "a",
      className: styles.back,
      content: "&lt;",
    });

    const nextButton = new View({
      tag: "a",
      className: styles.next,
      content: "&gt;",
    });

    const burger = new View({ tag: "a", className: styles.burger });
    burger.append(
      new View({ className: styles.burgerLine }),
      new View({ className: styles.burgerLine }),
      new View({ className: styles.burgerLine })
    );
    this.burger = burger;

    const levelTittle = new View({ tag: "h2", className: styles.levelTittle });
    const wrapper = new View({ className: styles.wrapper });
    wrapper.append(levelTittle, backButton, nextButton, burger);

    this.append(wrapper, progress);
    this.levelTittle = levelTittle;
    this.progress = progress;
    this.backButton = backButton;
    this.nextButton = nextButton;
  }
}
