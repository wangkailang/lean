function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

Element.prototype.render = function() {
  // 根据 tagName 构建
  var el = window.document.createElement(this.tagName);
  var props = this.props;

  //设置节点 DOM 属性
  for (var propName in props) { 
    var propValue = props[propName];
    el.setAttribute(propName, propValue);
  }

  var children = this.children || [];
  children.forEach(function(child) {
    var childEl = (child instanceof Element)
      ? child.render() // 如果子节点也是虚拟 DOM，递归构建 DOM 节点
      : window.document.createTextNode(child) // 如果是字符串，只构建文本节点
    el.appendChild(childEl);
  });

  return el;
}

export default function (tagName, props, children) {
  return new Element(tagName, props, children);
}