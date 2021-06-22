import updateNodeElement from "./updateNodeElement"

export default function createDOMElement(virtualDOM) {
    const { type, props } = virtualDOM;
    let newElement = null;

    if (type === 'text') {
        newElement = document.createTextNode(props.textContent);
    } else {
        newElement = document.createElement(type);
        updateNodeElement(newElement, virtualDOM);
    }

    return newElement;
}