import isFunctionComponent from './isFunctionComponent'
import mountElement from "./mountElement"

function buildFunctionComponent(virtualDOM) {
    const { type, props } = virtualDOM;
    return type(props || {});
}

function buildClassComponent(virtualDOM) {
    const { type, props } = virtualDOM;
    const comp = new type(props);
    const nextVirtual = comp.render();
    nextVirtual._componentInstance = comp;
    return nextVirtual
}

export default function mountComponent(virtualDOM, container, oldDom) {
    let nextVirtual = null;

    if (isFunctionComponent(virtualDOM)) {
        nextVirtual = buildFunctionComponent(virtualDOM)
    } else {
        nextVirtual = buildClassComponent(virtualDOM)
    }
    debugger

    if (virtualDOM.props.ref && nextVirtual) {
        virtualDOM.props.ref(nextVirtual._componentInstance)
    }

    mountElement(nextVirtual, container, oldDom);
}