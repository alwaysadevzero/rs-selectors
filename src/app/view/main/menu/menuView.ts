import View from '../../view'

export default class menuView extends View<'article'> {
    constructor() {
        super({
            tag: 'article',
            className: 'levels',
        })
        this.configureView()
    }

    configureView() {
        const description = new View({className: 'description'})
        description.setContent('wdadwadawfwafwafawfWfawfwafawgfwa')
        const helpButton = new View<'button'>({content: 'Reset', tag: 'button'});
        this.setAttributes({'data-theme': 'light'})
        this.append(description, helpButton)
    }
}