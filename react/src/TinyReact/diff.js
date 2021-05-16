import mountElement from "./mountElement";
import updateTextNode from "./updateTextNode";
import updateNodeElement from "./updateNodeElement";
import createDOMElement from "./createDOMElement"
import isFunction from "./isFunction"
import unmounteNode from "./unmounteNode"
import diffComponent from "./diffComponent"

export default function diff(virtualDOM, container, oldDom) {
    const oldVirtualDOM = oldDom && oldDom._oldVirtualDOM
    debugger
    if (!oldDom) {
        mountElement(virtualDOM, container);
    } else if (oldVirtualDOM.type !== virtualDOM.type && !isFunction(virtualDOM)) {
        const newElement = createDOMElement(virtualDOM);
        container.replaceChild(newElement, oldDom);
    } else if (isFunction(virtualDOM)) {
        const oldVirtualDOM = oldDom._oldVirtualDOM
        const oldInstance = oldVirtualDOM._componentInstance
        diffComponent(virtualDOM, oldInstance, oldDom, container)
    } else if (oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type) {
        if (oldVirtualDOM.type === 'text') {
            updateTextNode(virtualDOM, oldVirtualDOM, oldDom);
        } else {
            updateNodeElement(oldDom, virtualDOM, oldVirtualDOM);
        }
        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDom, oldDom.childNodes[index])
        })

        // 删除节点
        const virtualDOMChildren = virtualDOM.props.children;
        const oldVirtualDOMChildren = oldVirtualDOM.props.children;

        if (oldVirtualDOMChildren.length > virtualDOMChildren.length) {
            for (let i = oldVirtualDOMChildren.length - 1; i > virtualDOMChildren.length - 1; i--) {
                unmounteNode(oldDom.childNodes[i])
            }
        }
    }
}