export default function createElement(type, props, ...children) {

    const childChildrenEle = (children || []).reduce((acc, child) => {
        if (child !== false && child !== true && child !== null) {
            if (Object.prototype.toString.call(child) === '[object Object]') {
                acc.push(child)
            } else {
                acc.push(createElement('text', { textContent: child }))
            }
        }
        return acc
    }, [])


    return {
        type,
        props: { children: childChildrenEle, ...props },
        children: childChildrenEle
    };
}