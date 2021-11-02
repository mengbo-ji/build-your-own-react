
import mountElement from './mountElement'
import updateComponent from './updateComponent'

function diffComponent(virtualDom, oldComponent, oldDom, root) {
  // 判断是否是同一组件更新
  if (isSameComponent(virtualDom, oldComponent)) {
    // 同一组件
    updateComponent(virtualDom, oldComponent, oldDom, root)
  } else {
    // 不同组件
    mountElement(virtualDom, root, oldDom)
  }
}

function isSameComponent(virtualDom, oldComponent) {
  return oldComponent && virtualDom.type === oldComponent.constructor
}

export default diffComponent