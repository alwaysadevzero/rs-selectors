import BaseComponent from '../view'
import EditorView from './editor/editor'

export default class MainView extends BaseComponent {
    constructor() {
        const params = {
            className: 'container',
        }
        super(params)
        this.append(new EditorView())
    }
}