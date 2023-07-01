import Presenter from "./presenter";
import ResultModel from "../model/resultModel";
import { LevelStatus } from "../model/enums";

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
    console.log(1234);
    const answer: boolean = this.resultModel.checkAnswer(input);
    console.log(answer);
    if (answer) {
      this.emit.drawRightAnswer();
      this.emit.updatePassedLevel();
    } else {
      this.emit.drawWrongAnswer();
    }
  };
}
