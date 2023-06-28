import styles from './editor.module.css'
import BaseComponent from '../../view'
import PanelTemplate from '../shared/panel-template'
import InputView from './editor-input/editor-input'
export default class EditorView extends BaseComponent {
    constructor() {
        const params = {
            className: 'editor',
        }
        super(params)
        this.configureView()
    }

    configureView() {

        // const helpButton = new BaseComponent<'button'>({content: 'Help', tag: 'button', className: styles.panelButton})
        // helpButton.setAttributes({'type': 'submit'})

        const editorHeader = new PanelTemplate('CSS Editor', 'Styles.css')
        const editorInput = new InputView()

        this.setAttributes({'data-theme': 'light'})

        // editorHeader.append(helpButton)
        // editorHeader.node.insertBefore(helpButton.node, editorHeader.node.querySelector('.panel__filename'));

        // const editorInput = new BaseComponent<'input'>({tag: 'input', className: styles.panelButton})
        // editorInput.setAttributes({placeholder: 'Enter css selector'})
        this.append(editorHeader, editorInput)
    }
}