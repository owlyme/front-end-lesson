export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM) {
    const { props: { children, ...attrs } } = virtualDOM;
    const { props: { children: oldChildren, ...oldAttrs } } = oldVirtualDOM || { props: {} };

    if (virtualDOM.type === "text") {
        if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
            if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
                virtualDOM.parent.stateNode.appendChild(
                    document.createTextNode(virtualDOM.props.textContent)
                )
            } else {
                virtualDOM.parent.stateNode.replaceChild(
                    document.createTextNode(virtualDOM.props.textContent),
                    oldVirtualDOM.stateNode
                )
            }
        }
        return
    }

    Object.keys(attrs).forEach(propName => {
        const value = attrs[propName];
        const oldValue = oldAttrs[propName];
        if (value === oldValue) return;

        if (propName.slice(0, 2) === "on") {
            const eventName = propName.slice(2).toLowerCase()
            newElement.addEventListener(eventName, value)
            if (oldValue) {
                newElement.removeEventListener(eventName, oldValue)
            }
        } else if (propName === 'value' || propName === "checked") {
            newElement[propName] = value;
        } else if (propName === "textContent") {
            newElement.textContent = value
        } else if (propName === "className") {
            newElement.setAttribute('class', value)
        } else if (propName === "ref") {
            value(newElement)
        } else {
            newElement.setAttribute(propName, value)
        }
    });

    Object.keys(oldAttrs).forEach(propName => {
        const value = attrs[propName];
        const oldValue = oldAttrs[propName];
        if (value) return;

        if (propName.slice(0, 2) === "on") {
            const eventName = propName.slice(2).toLowerCase()
            newElement.removeEventListener(eventName, oldValue)
        } else {
            newElement.removeAttribute(propName)
        }
    })
}