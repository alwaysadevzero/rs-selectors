import styles from './levels.module.css'
import View from '../../../view'
import eventEmmiter from '../../../../util/eventEmmiter'
import LevelView from './level/level'
import { levelParams } from './level/typesView'
import { LevelStatus } from '../../../../model/enums'

export default class LevelsView extends View<'article'> {
    constructor() {
        super({
            className: styles.levels
        })
        this.configureView()
    }

    configureView() {
        const heading = new View({content: 'Choose a level'})

        const levels = this.configureLevels([{status: LevelStatus.SKIPPED, levelName: 'boban'}])
        
        const resetButton = new View({className: styles.resetButton, tag: 'button', content: 'Reset Progress'})
        this.append(heading, levels, resetButton)
    }

    private configureLevels(levels: levelParams[]): View {

        const levelsWrapper = new View({className: styles.levels})

        for (let i=0; i < levels.length; i++) {
            
            levels[i].position = i

            console.log(levels[i])

            const level = new LevelView(levels[i])

            levelsWrapper.append(level)
        }
        return levelsWrapper
    }
}