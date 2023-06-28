import View from '../../../view'
import './panel.css'

enum CssClasses {
    PANEL_TEMPLATE = 'panel',
    PANEL_NAME = 'panel__name',
    PANEL_FILENAME = 'panel__filename',

}

export default class PanelView extends View {
    constructor(panelName: string, fileName: string) {
        const params = {
            className: CssClasses.PANEL_TEMPLATE,
        }
        super(params)
        this.configureView(panelName, fileName)

    }

    configureView(panelName: string, fileName: string) {
        if (panelName) {
        const panelNameView = new View({content: panelName})
        panelNameView.addClass(CssClasses.PANEL_NAME)
        this.append(panelNameView)
        }

        if (fileName){
        const fileNameView = new View({content: fileName})
        fileNameView.addClass(CssClasses.PANEL_FILENAME)
        this.append(fileNameView)
        }
    }
}