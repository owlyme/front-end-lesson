function _getKey(str) {
  return str.replace(/\{\{(.*?)\}\}/g, '$1').replace(/\s/g, '')
}

class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.render()
  }

  render() {
    let children = this.el.childNodes
    children.forEach(node => {
      if (node.nodeType === 3) {
        this.renderText(node)
      }
    });
  }

  renderText(node) {
    // watch test
    let nodeValue = node.nodeValue
    let keys = nodeValue.match(/\{\{(.*?)\}\}/g);
    if (!keys) return;
    let newstr = nodeValue;

    (keys || []).forEach(key => {
      new Watcher(() => {
        let newstr = nodeValue;
        (keys || []).forEach(key => {
          let _key = _getKey(key);
          let pattern = new RegExp(`\\{\\{\\s\*${_key}\\s\*\\}\\}`);
          newstr = newstr.replace(pattern, this.vm[_key]);
        });
        node.nodeValue = newstr;
      });
      let _key = _getKey(key);
      let pattern = new RegExp(`\\{\\{\\s\*${_key}\\s\*\\}\\}`);
      newstr = newstr.replace(pattern, this.vm[_key]);
    });
    node.nodeValue = newstr;

  }
  renderVText() {

  }
}