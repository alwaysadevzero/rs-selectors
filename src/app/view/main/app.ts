import BaseComponent from '../view'
import EditorView from './editor/editor'
import menuView from './menu/menuView'

export default class MainView extends BaseComponent {
    constructor() {
        const params = {
            className: 'container',
        }
        super(params)

    
        this.configureView()
    }
    configureView() {
        const editor = new EditorView()
        const menu = new menuView()
        console.log(menu)
        this.append(editor, menu)
    }
}