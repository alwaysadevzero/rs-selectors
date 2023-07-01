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
    this.eventEmmiter.on(
      this.eventEmmiter.events.UPDATE_RESULT,
      this.updateResult
    );
    this.eventEmmiter.on(
      this.eventEmmiter.events.CHECK_ANSWER,
      this.checkAnswer
    );
  };

  private updateResult = (): void => {
    const htmlcode: string = this.resultModel.getHtml();
    this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RESULT, htmlcode);
  };

  private checkAnswer = (input: string): void => {
    console.log(input);
    const answer: boolean = this.resultModel.checkAnswer(input);
    console.log(answer);
    if (answer) {
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_RIGHT_ANSWER);
      this.eventEmmiter.emit(this.eventEmmiter.events.PASSED_LEVEL);
    } else {
      this.eventEmmiter.emit(this.eventEmmiter.events.DRAW_WRONG_ANSWER);
    }
  };
}
