import './styles/reset.css';
import './styles/styles.css';
import mainView from './app/view/main/main'

class app {
    constructor(){
        this.configureView()
    }
    configureView(){
        const view = new mainView();
        const main = document.querySelector('.main')
        if (main) main.append(view.node)
    }
}

new app()