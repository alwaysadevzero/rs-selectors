class ParserHtml extends DOMParser {
    constructor() {
        super()
    }
    parse(htmlString: string): HTMLElement{
        const doc = this.parseFromString(htmlString, 'text/html')
        return doc.body.firstChild as HTMLElement
    }
}

export default new ParserHtml()