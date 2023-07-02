import View from "../../../view";
import styles from "./progress.module.css";
import eventEmmiter from "../../../../util/eventEmmiter";

export default class ProgressView extends View {
  private progress!: View;

  constructor() {
    super({});
    this.configureView();
    this.addEventListener();
  }

  private addEventListener(): void {
    eventEmmiter.on(eventEmmiter.events.DRAW_PROGRESS, this.updateProgress);
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
  };

  private configureView() {
    const progress = new View({ tag: "progress", className: styles.progress });
    progress.setAttributes({ value: "0", max: "100" });

    this.append(progress);
    this.progress = progress;
  }
}
