import createDOMElement from "./createDOMElement"
import isFunction from "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement(virtualDOM, container, oldDOM) {
    if (isFunction(virtualDOM)) {
        // Component
        mountComponent(virtualDOM, container, oldDOM)
    } else {
        // NativeElement
        createDOMElement(virtualDOM, container, oldDOM)
    }
}