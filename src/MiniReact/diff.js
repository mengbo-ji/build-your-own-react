import mountElement from './mountElement';
function diff(virtualDom, root, oldDom) {
  if (!oldDom) {
    mountElement(virtualDom, root)
  }
}

export default diff