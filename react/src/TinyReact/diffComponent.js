import mountComponent from "./mountComponent";
import unmounteNode from "./unmounteNode"
import diff from "./diff"
import updateCoomponent from "./updateCoomponent"

function isSameComponent(virtualDom, oldInstance) {
    return oldInstance && virtualDom.type === oldInstance.constructor
}

export default function diffComponent(virtualDOM, oldInstance, oldDom, container) {
    if (isSameComponent(virtualDOM, oldInstance)) {
        updateCoomponent(virtualDOM, oldInstance, oldDom, container)
    } else {
        mountComponent(virtualDOM, container, oldDom)
    }

}