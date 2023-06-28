import './styles/reset.css';
import './styles/styles.css';
import mainView from './app/view/main/main'
import Presenter from './app/presenter/presenter';
import Model from './app/model/model';
class app {
    constructor(){
        this.configureView()
        const model = new Model();
        const presenter = new Presenter(model);
    }
    configureView(){
        const view = new mainView();
        const main = document.querySelector('.main')
        if (main) main.append(view.node)
        
    }
}

new app()