import styles from './editor-input.module.css'
import BaseComponent from '../../../view'

const LINES_NUMBER = 20
const TEXT_AREA = [
    '', '{', '/* Styles would go here. */', '}', '', 
    '/*', 'Type a number to skip to a level.', 'Ex → "5" for level 5', '*/' 
]


export default class InputView extends BaseComponent<'article'> {
    constructor() {
        super({
            tag: 'article', 
            className: styles.field
        })
        this.configureView()
    }

    configureView() {
        const input = new BaseComponent<'input'>({
            tag: 'input', 
            className: styles.input
        })
        
        const lines = this.configureLines()
        lines.node.firstChild?.appendChild(input.node)

        const helpButton = new BaseComponent<'button'>({content: 'Enter', tag: 'button', className: styles.button});
    
        this.append(lines, helpButton);
    }

    configureLines(lineCount?: number): BaseComponent {

        const count = lineCount ?? LINES_NUMBER
        const lines = new BaseComponent<'div'>({
            tag: 'div', 
            className: styles.lines
        })

        for (let i = 0; i < count; i++) {
            const line = new BaseComponent<'span'>({
                tag: 'span', 
                className: styles.line
            })

            if (i < TEXT_AREA.length) line.setContent(TEXT_AREA[i])
            
            lines.append(line.node)
        }

        return lines;
    }
    
}