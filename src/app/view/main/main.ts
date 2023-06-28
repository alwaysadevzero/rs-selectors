import styles from './main.module.css'
import View from '../view'
import EditorView from './editor/editorView'
import menuView from './menu/menuView'
import parserHtml from '../../util/parserHtml'


const footerRawHTML = `
    <footer class="footer">
        <div class="container">
            <ul class="footer__links">
                <li>
                    <a href="https://rs.school/" class="contrast">© 2022 The Rolling Scopes</a>
                </li>
                <li>
                    <a href="https://github.com/alwaysadevzero" class="contrast secondary">Author</a>
                </li>
                <li>
                    <a href="" class="contrast">RS selectors 2023</a>
                </li>
            </ul>
        </div>
    </footer>`;

export default class MainView extends View {
    constructor() {
        const params = {
            className: styles.app
        }
        super(params)

    
        this.configureView()
    }
    private configureView(): void {

        const leftSide = new View({className: styles.leftSide})

        const title = new View({tag: 'h1', className: styles.title, content: "RS Selectors"})
        const editor = new EditorView()
        const footer = parserHtml.parse(footerRawHTML)



        leftSide.append(title, editor, footer)

        
        const rightSide = new View({className: styles.rightSide})

        const menu = new menuView()

        rightSide.append(menu)

        this.append(leftSide,rightSide)
    }
}