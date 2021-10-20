import mountComponent from './mountComponent';
function diff(virtualDom, root, oldDom) {
  if (!oldDom) {
    mountComponent(virtualDom, root)
  }
}

export default diff