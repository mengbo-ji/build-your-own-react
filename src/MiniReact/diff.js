import mountElement from './mountElement';
function diff(virtualDom, root, oldDom) {
  const oldVirtaulDom = oldDom && oldDom._virtualDom
  if (!oldDom) {
    mountElement(virtualDom, root)
  } else {
    
  }
}

export default diff