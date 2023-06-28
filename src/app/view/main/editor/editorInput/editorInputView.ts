import styles from './editorInput.module.css'
import View from '../../../view'

const LINES_NUMBER = 20
const TEXT_AREA = [
    '', '{', '/* Styles would go here. */', '}', '', 
    '/*', 'Type a number to skip to a level.', 'Ex → "5" for level 5', '*/' 
]


export default class InputView extends View<'article'> {
    constructor() {
        super({
            tag: 'article', 
            className: styles.field
        })
        this.configureView()
    }

    configureView() {
        const input = new View<'input'>({
            tag: 'input', 
            className: styles.input
        })
        
        const lines = this.configureLines()
        lines.node.firstChild?.appendChild(input.node)

        const helpButton = new View<'button'>({content: 'Enter', tag: 'button', className: styles.button});
    
        this.append(lines, helpButton);
    }

    configureLines(lineCount?: number): View {

        const count = lineCount ?? LINES_NUMBER
        const lines = new View<'div'>({
            tag: 'div', 
            className: styles.lines
        })

        for (let i = 0; i < count; i++) {
            const line = new View<'span'>({
                tag: 'span', 
                className: styles.line
            })

            if (i < TEXT_AREA.length) line.setContent(TEXT_AREA[i])
            
            lines.append(line.node)
        }

        return lines;
    }
    
}