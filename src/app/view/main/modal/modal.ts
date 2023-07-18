import styles from "./modal.module.css";
import View from "../../view";
import eventEmmiter from "../../../util/eventEmmiter";

export default class ModalView extends View {
  private modal!: View;

  private exitButton!: View;

  constructor() {
    super({ className: styles.modal });
    this.configureView();
    this.initListeners();
  }

  private initListeners = () => {
    this.exitButton.addListener("click", () => {
      this.disableModal();
    });

    this.modal.addListener("click", (event) => {
      if (!event?.target) return;
      if (event.target === this.modal.node) this.disableModal();
    });
    eventEmmiter.on(eventEmmiter.events.GAME_WIN, () => this.enableModal());
  };

  private disableModal = () => {
    this.modal.removeAttributes("open");
    this.removeClass(styles.open);
  };

  private enableModal = () => {
    this.modal.setAttributes({ open: "" });
    this.addClass(styles.open);
  };

  private configureView = () => {
    this.modal = new View({ tag: "dialog", className: styles.modal });
    this.modal.setAttributes({ id: "modal" });

    const article = new View({ tag: "article", className: styles.article });
    const h2 = new View({ tag: "h2", content: "You Won!" });
    this.exitButton = new View({ tag: "a" });
    this.exitButton.setAttributes({
      "aria-label": "Close",
      class: "close",
      "data-target": "modal",
    });

    this.append(this.modal);
    this.modal.append(article);
    article.append(this.exitButton, h2);
  };
}
