import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import createDOMElement from "./createDOMElement"
import unmounteNode from "./unmounteNode"

export default function mountNativeElement(virtualDOM, container, oldDom) {
    const newElement = createDOMElement(virtualDOM)

    if (oldDom) {
        unmounteNode(oldDom)
    }

    container.appendChild(newElement);

    if (virtualDOM._componentInstance) {
        virtualDOM._componentInstance.setDOM(newElement);
    }

    return newElement;
}