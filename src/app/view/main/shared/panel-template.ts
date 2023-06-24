import BaseComponent from '../../view'
import './panel-template.css'

enum CssClasses {
    PANEL_TEMPLATE = 'panel',
    PANEL_NAME = 'panel__name',
    PANEL_FILENAME = 'panel__filename',

}

export default class PanelTemplate extends BaseComponent {
    constructor(panelName: string, fileName: string) {
        const params = {
            className: CssClasses.PANEL_TEMPLATE,
        }
        super(params)
        this.configureView(panelName, fileName)

    }

    configureView(panelName: string, fileName: string) {
        if (panelName) {
        const panelNameView = new BaseComponent({content: panelName})
        panelNameView.addClass(CssClasses.PANEL_NAME)
        this.append(panelNameView)
        }

        if (fileName){
        const fileNameView = new BaseComponent({content: fileName})
        fileNameView.addClass(CssClasses.PANEL_FILENAME)
        this.append(fileNameView)
        }
    }
}