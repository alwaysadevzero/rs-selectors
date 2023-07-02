import styles from "./desciption.module.css";
import View from "../../../view";
import eventEmmiter from "../../../../util/eventEmmiter";

export default class DescriptionView extends View {
  constructor() {
    super({
      className: styles.desciption,
    });
    this.configureView();
  }

  private configureView = (): void => {
    const header = new View({ className: styles.header });
    this.append(header);
  };
}
