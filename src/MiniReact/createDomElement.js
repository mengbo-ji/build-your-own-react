import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'

function createDomElement(virtualDom) {
  let newElement = null;
  if (virtualDom.type === 'text') {
    // 文本
    newElement = document.createTextNode(virtualDom.props.textContent)
  } else {
    newElement = document.createElement(virtualDom.type)
    updateNodeElement(newElement, virtualDom)
  }
  newElement._virtualDom = virtualDom
  virtualDom.children.forEach(child => {
    mountElement(child, newElement)
  })
  if (virtualDom.props && virtualDom.props.ref) {
    virtualDom.props.ref(newElement)
  }
  return newElement;
}

export default createDomElement;