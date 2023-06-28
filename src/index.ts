import './styles/reset.css';
import './styles/styles.css';
import appView from './app/view/main/app'

class app {
    constructor(){
        this.configureView()
    }
    configureView(){
        const view = new appView();
        const main = document.querySelector('.main')
        if (main) main.append(view.node)
    }
}

new app()