import './editor.css'
import BaseComponent from '../../view'
import PanelTemplate from '../shared/panel-template'

export default class EditorView extends BaseComponent {
    constructor() {
        const params = {
            className: 'editor',
        }
        super(params)
        this.configureView()
    }

    configureView() {

        const helpButton = new BaseComponent<'button'>({content: 'Help', tag: 'button', className: 'panel__button'})
        helpButton.setAttributes({'type': 'submit'})

        const editorHeader = new PanelTemplate('CSS Editor', '')

        editorHeader.append(helpButton)
        // editorHeader.node.insertBefore(helpButton.node, editorHeader.node.querySelector('.panel__filename'));

        const editorInput = new BaseComponent<'input'>({tag: 'input', className: 'editor__input'})
        editorInput.setAttributes({placeholder: 'Enter css selector'})
        this.append(editorHeader, editorInput)
    }

}