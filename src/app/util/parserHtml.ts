import sanitizeHtml from "sanitize-html";
class ParserHtml {
  parse(htmlString: string): string {
    const markup = sanitizeHtml(htmlString, {
      allowedClasses: {
        "*": ["*"],
      },
    });
    console.log(markup);
    return markup;
  }
}

export default new ParserHtml();
