import mountComponent from './mountComponent'
function createDomElement(virtualDom) {
  let nativeElement = null;
  if (virtualDom.type === 'text') {
    // 文本
    nativeElement = document.createTextNode(virtualDom.props.textContent)
  } else {
    nativeElement = document.createElement(virtualDom.type)
  }

  virtualDom.children.forEach(child => {
    mountComponent(child, nativeElement)
  })
  return nativeElement;
}

export default createDomElement;