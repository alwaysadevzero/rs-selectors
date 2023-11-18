import drawEvents from "../util/events/drawEvents";
import updateEvents from "../util/events/updateEvents";
import gameEvents from "../util/events/gameEvents";
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
    updateEvents.on.updateResult(this.updateResult);
    gameEvents.on.checkAnswer(this.checkAnswer);
    gameEvents.on.skipLevel(this.skipLevel);
  };

  private skipLevel = () => {
    drawEvents.emit.drawSkipLevel(this.resultModel.getSolution());
  };

  private updateResult = () => {
    drawEvents.emit.drawResult(this.resultModel.getHtml());
  };

  private checkAnswer = (input: string) => {
    const answer: boolean = this.resultModel.checkAnswer(input);
    if (answer) {
      drawEvents.emit.drawRightAnswer();
      updateEvents.emit.updatepassLevel();
    } else {
      drawEvents.emit.drawWrongAnswer();
    }
  };
}
