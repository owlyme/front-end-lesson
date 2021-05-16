import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import diff from "./diff"
export default function createDOMElement(virtualDOM) {
    const { type, props } = virtualDOM;
    let newElement = null;

    if (type === 'text') {
        newElement = document.createTextNode(props.textContent);
    } else {
        newElement = document.createElement(type);
        updateNodeElement(newElement, virtualDOM);
    }
    newElement._oldVirtualDOM = virtualDOM;

    props.children.forEach((child, index) => {

        mountElement(child, newElement)

    })

    return newElement;
}