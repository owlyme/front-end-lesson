import diff from "./diff"

export default function updateComponent(virtualDOM, oldInstance, oldDom, container) {

    oldInstance.componentWillReceiveProps();

    if (oldInstance.shouldComponentUpdate(virtualDOM.props)) {
        const prevProps = oldInstance.props
        oldInstance.componentWillUpdate(virtualDOM.props)

        oldInstance.updateProps(virtualDOM.props);

        const newVirtualDom = oldInstance.render();
        newVirtualDom._componentInstance = oldInstance;
        diff(newVirtualDom, container, oldDom)

        oldInstance.componentDidUpdate(prevProps)
    }

}