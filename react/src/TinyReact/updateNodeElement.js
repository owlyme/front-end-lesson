export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM) {
    const { props: { children, ...attrs } } = virtualDOM;
    const { props: { children: oldChildren, ...oldAttrs } } = oldVirtualDOM || { props: {} };

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