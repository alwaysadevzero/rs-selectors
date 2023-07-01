import sanitizeHtml, { IOptions } from "sanitize-html";

const ALLOWED_TAGS = ["plate", "bento", "apple", "orange", "pickle"];
class ParserHtml {
  public parse(htmlString: string, tags?: boolean): string {
    let settings: Partial<IOptions> = {
      allowedClasses: { "*": ["*"] },
    };

    if (tags) {
      settings = { ...settings, allowedTags: ALLOWED_TAGS };
    }

    const markup = sanitizeHtml(htmlString, settings);
    return markup;
  }

  public getWrap(htmlString: string, tags?: boolean): HTMLElement {
    const elem = document.createElement("div");

    let wrap;
    if (tags) wrap = this.parse(htmlString, tags);
    else wrap = this.parse(htmlString);

    elem.innerHTML = wrap;

    return elem;
  }
}

export default new ParserHtml();
