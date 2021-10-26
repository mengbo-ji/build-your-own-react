function updateTextNode(virtualDom, oldVirtaulDom, oldDom) {
  if (virtualDom.props.textContent !== oldVirtaulDom.props.textContent) {
    oldDom.textContent = virtualDom.props.textContent
    oldDom._virtualDom = virtualDom
  }
}

export default updateTextNode