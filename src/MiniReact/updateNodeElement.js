function updateNodeElement (newElement, virtualDom) {
  // 对象节点的属性对象
  const props = virtualDom.props;
  Reflect.ownKeys(props).forEach(propName => {
    const propValue = props[propName]
    // 判断是否是事件 onClick -> click
    if (propName.startsWith('on')) {
      newElement.addEventListener(propName.toLowerCase().slice(2), propValue)
    } else if (propName === 'value' || propName === 'checked') {
      // 这种形式不能通过 setAttribute 设置
      newElement[propName] = propValue
    } else if (propName !== 'children') {
      if (propName === 'className') {
        newElement.setAttribute('class', propValue)
      } else {
        newElement.setAttribute(propName, propValue)
      }
    }
  })
}

export default updateNodeElement