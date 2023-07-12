import Semmiter from "../util/shorterEmmiter";
import ResultModel from "../model/resultModel";

export default class ResultPresenter {
  private resultModel = new ResultModel();

  constructor() {
    this.updateResult();
    this.addListener();
    window.addEventListener("unload", () => {
      this.resultModel.saveGame();
    });
  }

  private addListener = () => {
    Semmiter.on.updateResult(this.updateResult);
    Semmiter.on.checkAnswer(this.checkAnswer);
    Semmiter.on.skipLevel(this.skipLevel);
  };

  private skipLevel = () => {
    Semmiter.emit.drawSkipLevel(this.resultModel.getSolution());
  };

  private updateResult = () => {
    Semmiter.emit.drawResult(this.resultModel.getHtml());
  };

  private checkAnswer = (input: string) => {
    const answer: boolean = this.resultModel.checkAnswer(input);
    if (answer) {
      Semmiter.emit.drawRightAnswer();
      Semmiter.emit.updatepassLevel();
    } else {
      Semmiter.emit.drawWrongAnswer();
    }
  };
}
