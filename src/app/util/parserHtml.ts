class ParserHtml extends DOMParser {
    constructor() {
        super()
    }
    pasre(htmlString: string){
        const doc = this.parseFromString(htmlString, 'text/html')
        return doc.body.firstChild
    }
}

export default new ParserHtml()