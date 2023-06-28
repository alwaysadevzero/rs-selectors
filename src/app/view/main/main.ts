import View from '../view'
import EditorView from './editor/editorView'
import menuView from './menu/menuView'

export default class MainView extends View {
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
        this.append(editor, menu)
    }
}