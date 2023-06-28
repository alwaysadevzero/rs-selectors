import styles from './menu.module.css'
import View from '../../view'

export default class menuView extends View<'article'> {
    constructor() {
        super({
            tag: 'article',
            className: styles.menu
        })
        this.configureView()
    }

    configureView() {
        const description = new View({className: 'description'})
        description.setContent('wdadwadawfwafwafawfWfawfwafawgfwa')
        const helpButton = new View<'button'>({content: 'Reset', tag: 'button'});
        this.append(description, helpButton)
    }
}