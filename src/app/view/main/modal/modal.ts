import styles from "./modal.module.css";
import View from "../../view";
import eventEmmiter from "../../../util/eventEmmiter";

export default class ModalView extends View {
  private modal!: View;

  private exitButton!: View;

  constructor() {
    super({});
    this.configureView();
    this.addEventListener();
  }

  private addEventListener = (): void => {
    this.exitButton.addListener("click", () => {
      this.disableModal();
    });

    this.modal.addListener("click", (event) => {
      if (!event?.target) return;
      if (event.target === this.modal.node) this.disableModal();
    });

    eventEmmiter.on(eventEmmiter.events.GAME_WIN, () => this.enableModal());
  };

  private disableModal = (): void => {
    this.modal.removeAttributes("open");
  };

  private enableModal = (): void => {
    this.modal.setAttributes({ open: "" });
  };

  private configureView = (): void => {
    const modal = new View({ tag: "dialog", className: styles.modal });
    modal.setAttributes({ id: "modal" });

    const article = new View({ tag: "article", className: styles.article });
    const h2 = new View({ tag: "h2", content: "You Won!" });
    const exitButton = new View({ tag: "a" });
    exitButton.setAttributes({
      "aria-label": "Close",
      class: "close",
      "data-target": "modal",
    });

    this.append(modal);
    modal.append(article);
    article.append(exitButton, h2);

    this.modal = modal;
    this.exitButton = exitButton;
  };
}
