import "./styles/reset.css";
import "./styles/styles.css";
import MainView from "./app/view/main/main";
import LevelPresenter from "./app/presenter/levelsPresenter";
import HtmlPresenter from "./app/presenter/htmlPresenter";
import ResultPresenter from "./app/presenter/resultPresenter";
import DescriptionPresenter from "./app/presenter/descriptionPresenter";

class App {
  constructor() {
    const view = new MainView();
    const main = document.querySelector(".main");
    if (main) main.append(view.node);

    const levelsPresenter = new LevelPresenter();
    const htmlPresenter = new HtmlPresenter();
    const resultPresenter = new ResultPresenter();
    const descriptionPresenter = new DescriptionPresenter();
  }
}

// eslint-disable-next-line no-new
new App();
