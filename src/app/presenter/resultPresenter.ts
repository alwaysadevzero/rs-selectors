import Presenter from "./presenter";
import ResultModel from "../model/resultModel";

export default class ResultPresenter extends Presenter {
  private resultModel = new ResultModel();

  constructor() {
    super();
    this.updateResult();
    this.addListener();
    window.addEventListener("unload", () => {
      this.resultModel.saveGame();
    });
  }

  private addListener = (): void => {
    this.on.updateResult(this.updateResult);
    this.on.checkAnswer(this.checkAnswer);
    this.on.skipLevel(this.skipLevel);
  };

  private skipLevel = () => {
    this.emit.drawSkipLevel(this.resultModel.getSolution());
  };

  private updateResult = (): void => {
    this.emit.drawResult(this.resultModel.getHtml());
  };

  private checkAnswer = (input: string): void => {
    const answer: boolean = this.resultModel.checkAnswer(input);
    if (answer) {
      this.emit.drawRightAnswer();
      this.emit.updatepassLevel();
    } else {
      this.emit.drawWrongAnswer();
    }
  };
}
