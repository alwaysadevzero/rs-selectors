import './styles/reset.css';
import './styles/styles.css';
import MainView from './app/view/main/main'

class app {
    constructor(){
        this.configureView()
    }
    configureView(){
        const view = new MainView();
        const main = document.querySelector('.main')
        if (main) main.append(view.node)
    }
}

new app()