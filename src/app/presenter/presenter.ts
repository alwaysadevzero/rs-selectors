import Model from "../model/model";
import EventEmitter from "../util/eventEmmiter";

export default class Presenter {
    private model = new Model()
    constructor(model: Model) {
        this.addListeners()
    }

    private init() {

    }


    addListeners(){
        EventEmitter.on(EventEmitter.events.CHECK_ANSWER, this.gg);
    }

    gg(...args: unknown[]): void {
        console.log(args)
    }
}
