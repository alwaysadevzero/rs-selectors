import BaseComponent from '../../component'

export default class menuComponent extends BaseComponent<'article'> {
    constructor() {
        super({
            tag: 'article',
            className: 'levels',
        })
        this.configureView()
    }

    configureView() {
        const description = new BaseComponent({className: 'description'})
        description.setContent('wdadwadawfwafwafawfWfawfwafawgfwa')
        const helpButton = new BaseComponent<'button'>({content: 'Reset', tag: 'button'});
        this.setAttributes({'data-theme': 'light'})
        this.append(description, helpButton)
    }
}