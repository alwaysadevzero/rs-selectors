import Presenter from "./presenter";
import ResultModel from "../model/resultModel";

export default class ResultPresenter extends Presenter {
  private resultModel = new ResultModel();

  constructor() {
    super();
    this.updateResult();
    this.addListener();
  }

  private addListener = (): void => {
    this.on.updateResult(this.updateResult);
    this.on.checkAnswer(this.checkAnswer);
  };

  private updateResult = (): void => {
    const htmlCode: string = this.resultModel.getHtml();
    this.emit.drawResult(htmlCode);
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
