import { createDOMElement } from "../../createDom"
import createComponent from "../../CreateComponent"
const CreateStateNode = (fiber) => {
    if (fiber.tag === 'host_component') {
        return createDOMElement(fiber)
    } else {
        return createComponent(fiber)
    }
}

export default CreateStateNode;