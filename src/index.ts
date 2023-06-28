import './styles/reset.css';
import './styles/styles.css';
import mainView from './app/view/main/main'
import Presenter from './app/presenter/presenter';
class app {
    constructor(){
        this.configureView()
        const presenter = new Presenter();
    }
    configureView(){
        const view = new mainView();
        const main = document.querySelector('.main')
        if (main) main.append(view.node)
        
    }
}

new app()
