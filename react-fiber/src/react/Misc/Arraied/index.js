export default function arraied(data) {
    return Array.isArray(data) ? data : [data]
}