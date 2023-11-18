import Model from "./model";
import ParserHtml from "../util/parserHtml";

export default class ResultModel extends Model {
  public getHtml(): { htmlCode: string; solution: string } {
    const index: number = this.currentIndex;
    const { html } = this.states[index];
    const { solution } = this.states[index];

    return { htmlCode: html, solution };
  }

  public getSolution(): string {
    const index: number = this.currentIndex;
    const { solution } = this.states[index];
    return solution;
  }

  public checkAnswer(input: string): boolean {
    const { htmlCode } = this.getHtml();
    const solution: string = this.getSolution();

    const markup = ParserHtml.getWrap(htmlCode, true);

    try {
      const answer = markup.querySelectorAll(solution);
      const userInput = markup.querySelectorAll(input);

      const result: boolean = this.compareResults(answer, userInput);
      return result;
    } catch (e) {
      return false;
    }
  }

  private compareResults(answer: NodeList, userInput: NodeList): boolean {
    if (answer.length !== userInput.length) return false;
    if (JSON.stringify(answer) !== JSON.stringify(userInput)) return false;

    return true;
  }
}
