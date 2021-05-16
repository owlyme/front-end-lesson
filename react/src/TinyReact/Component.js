import diff from "./diff"

export default class Component {
    constructor(props) {
        this.props = props;
        this.state = {}
    }

    setState(newState) {
        this.state = Object.assign({}, this.state, newState);
        const newVirtual = this.render();
        const oldDOM = this.getDOM();

        diff(newVirtual, oldDOM.parentNode, oldDOM)
    }

    setDOM(dom) {
        this._dom = dom
    }
    getDOM() {
        return this._dom
    }
    updateProps(props) {
        this.props = props
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {

    }
    shouldComponentUpdate(nextProps, nextState) {
        // || nextState !== this.state
        return nextProps !== this.props
    }
    componentWillUpdate(nextProps, nextState) {

    }
    componentDidUpdate(nextProps, nextState) {

    }
    componentWillUnmount() {

    }
}