import EventEmitter from "../util/eventEmmiter";

export default class Presenter {
    constructor() {
        this.gg = this.gg.bind(this);
        this.addListeners()
    }

    addListeners(){
        EventEmitter.on(EventEmitter.events.CHECK_ANSWER, this.gg);
    }

    gg(...args: unknown[]): void {
        console.log(args)
    }
}
