import Model from "./model";
import parserHtml from "../util/parserHtml";

export default class ResultModel extends Model {
  private markup!: HTMLElement;

  private markupindex!: number;

  public getHtml(): string {
    const index: number = this.currentIndex;
    const htmlString: string = this.states[index].html;

    this.markupindex = index;

    return htmlString;
  }

  public getSolution(): string {
    const index: number = this.currentIndex;
    const { solution } = this.states[index];
    return solution;
  }

  public checkAnswer(input: string): boolean {
    const htmlString: string = this.getHtml();
    const solution: string = this.getSolution();

    const markup = parserHtml.getWrap(htmlString, true);

    const answer = markup.querySelectorAll(solution);
    const userInput = markup.querySelectorAll(input);

    const result: boolean = this.compareResults(answer, userInput);
    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  private compareResults(answer: NodeList, userInput: NodeList): boolean {
    if (answer.length !== userInput.length) return false;
    if (JSON.stringify(answer) !== JSON.stringify(userInput)) return false;

    return true;
  }
}
