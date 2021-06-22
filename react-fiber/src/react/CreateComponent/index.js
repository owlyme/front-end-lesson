export default function createComponent(fiber) {
  if (fiber.tag === 'class_component') {
    return new fiber.type(fiber.props)
  } else if (fiber.tag === 'function_component') {
    return fiber.type
  }
}