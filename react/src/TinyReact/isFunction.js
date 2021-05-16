export default function isFunction(virtualDOM) {
    const { type } = virtualDOM;
    return type && typeof type === "function"
}