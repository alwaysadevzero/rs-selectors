import "./styles/reset.css";
import "./styles/styles.css";
import mainView from "./app/view/main/main";
import LevelPresenter from "./app/presenter/levelsPresenter";
import HtmlPresenter from "./app/presenter/htmlPresenter";
class app {
  constructor() {
    this.configureView();
    const levelsPresenter = new LevelPresenter();
    const htmlPresenter = new HtmlPresenter();
  }
  configureView() {
    const view = new mainView();
    const main = document.querySelector(".main");
    if (main) main.append(view.node);
  }
}

new app();
