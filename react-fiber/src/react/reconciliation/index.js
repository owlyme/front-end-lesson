import {
    createTaskQueue,
    arrified,
    CreateStateNode,
    getTag
} from "../Misc"
import {
    updateNodeElement
} from "../createDom"


export const taskQueue = createTaskQueue();
let subTask = null;
let pendingCommit = null

const commitAllWork = fiber => {
    fiber.effects.forEach(item => {
        if (item.effectTag === 'delete') {
            item.parent.stateNode.removeChild(item.stateNode);
        } else if (item.effectTag === 'update') {
            if (item.type === item.alternate.type) {
                if (item.tag !== 'class_component' && item.tag !== 'function_component') {
                    updateNodeElement(item.stateNode, item, item.alternate)
                }
            } else {
                item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode)
            }
        } else if (item.effectTag === 'palcement') {
            let fiberItem = item;
            let parentFiber = fiberItem.parent;
            while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
                parentFiber = parentFiber.parent
            }

            if (fiberItem.tag === 'host_component') {
                parentFiber.stateNode.appendChild(fiberItem.stateNode)
            }
        }

    })

    fiber.stateNode.__rootFiberContainer = fiber
}

const getFirstTask = () => {
    const task = taskQueue.pop();
    const alternate = task.dom.__rootFiberContainer

    const tag = alternate ? alternate.tag : 'host_component'

    return {
        props: task.props,
        stateNode: task.dom,
        tag,
        effects: [],
        child: alternate ? alternate.child : null,
        alternate
    }
}

const reconciliationChildren = (fiber, children) => {
    const arrifiedChildern = arrified(children);
    const arrifiedChildernLength = arrifiedChildern.length
    let index = 0;
    let newFiber = null;
    let prevFiber = null;
    let alternate = null;

    if (fiber.alternate && fiber.alternate.child) {
        alternate = fiber.alternate.child
    }

    while (index < arrifiedChildernLength || alternate) {
        const newElement = arrifiedChildern[index];

        if (alternate && !newElement) {
            alternate.effectTag = "delete";
            fiber.effects.push(alternate)
        } else if (newElement && alternate) {
            newFiber = {
                type: newElement.type,
                props: newElement.props,
                tag: getTag(newElement),
                effects: [],
                effectTag: 'update',
                parent: fiber,
                sibling: null,
                alternate,
            }
            if (newElement.type === alternate.type) {
                newFiber.stateNode = alternate.stateNode;
            } else {
                newFiber.stateNode = CreateStateNode(newFiber);
            }
        } else if (newElement && !alternate) {
            newFiber = {
                type: newElement.type,
                props: newElement.props,
                tag: getTag(newElement),
                effects: [],
                effectTag: 'palcement',
                parent: fiber,
                sibling: null,
                alternate: null
            }
            newFiber.stateNode = CreateStateNode(newFiber);
            newFiber.stateNode.prevFiber = newFiber
            newFiber.stateNode.parentFiber = fiber
        }

        if (index === 0) {
            fiber.child = newFiber
        } else if (newElement) {
            prevFiber.sibling = newFiber
        }

        if (alternate) {
            alternate = alternate.sibling || null
        } else {
            alternate = null
        }

        prevFiber = newFiber

        index++
    }
}

const excuteTask = (fiber) => {
    if (fiber.tag === 'class_component') {
        reconciliationChildren(fiber, fiber.stateNode.render())
    } else if (fiber.tag === 'function_component') {
        reconciliationChildren(fiber, fiber.stateNode(fiber.props))
    } else {
        reconciliationChildren(fiber, fiber.props.children)
    }

    if (fiber.child) {
        return fiber.child
    }
    if (fiber.sibling && fiber.type !== "text") {
        return fiber.sibling
    }
    let currentExcutionFiber = fiber

    while (currentExcutionFiber.parent) {
        currentExcutionFiber.parent.effects =
            currentExcutionFiber.parent.effects.concat(currentExcutionFiber.effects, currentExcutionFiber)
        if (currentExcutionFiber.sibling) {
            return currentExcutionFiber.sibling
        }
        currentExcutionFiber = currentExcutionFiber.parent
    }
    console.log(currentExcutionFiber)
    pendingCommit = currentExcutionFiber
}

const workLoop = deadline => {
    if (!subTask) {
        subTask = getFirstTask();
    }
    // 构建fiber 链表
    while (subTask && deadline.timeRemaining() > 1) {
        subTask = excuteTask(subTask);
    }
    // 渲染视图
    if (pendingCommit) {
        commitAllWork(pendingCommit)
    }
}

export const performTask = deadline => {
    workLoop(deadline)
    debugger
    if (subTask || !taskQueue.isEmpty()) {

        requestIdleCallback(performTask)
    }
}


export function render(element, dom) {

    const root = {
        dom: dom,
        props: {
            children: element
        }
    }
    taskQueue.push(root)

    requestIdleCallback(performTask)
}