function unmountNode(node){
  // 获取节点的 _virtualDom对象
  const virtualDom = node._virtualDom
  // 1.如果是文本类型可以直接删除
  if (virtualDom.type === 'text') {
    node.remove()
    return
  }
  // 2.看下节点是否是组件生产的
  const component = virtualDom.component
  if (component) {
    component.componentWillUnmount()
  }
  // 3.看下节点身上是否有ref属性
  if (virtualDom.props && virtualDom.props.ref) {
    virtualDom.props.ref(null)
  }
  // 4.看下节点属性中是否有事件
  Object.keys(virtualDom.props).forEach(propName => {
    if (propName.startsWith('on')) {
      const eventName = propName.toLowerCase().slice(0, 2)
      const eventHandler = virtualDom.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })
  // 5.递归删除子节点
  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
      unmountNode(node.childNodes[i])
      i--
    }
  }
  node.remove()
}
export default unmountNode