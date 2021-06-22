import { taskQueue, performTask } from "../reconciliation"

export class Component {
    constructor(props) {
        this.props = props
        this.state = {}
    }

    setState(arg = {}) {
        console.log('12313')
        Object.assign(this.state, arg)

        // type: newElement.type,
        //         props: newElement.props,
        //         tag: getTag(newElement),
        //         effects: [],
        //         effectTag: 'palcement',
        //         parent: fiber,
        //         sibling: null,
        //         alternate: null

        this.__rootFiberContainer = this.prevFiber

        taskQueue.push({
            dom: this,
            ...this.prevFiber,

        })
        requestIdleCallback(performTask)
    }
}