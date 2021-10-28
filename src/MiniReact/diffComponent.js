
import mountElement from './mountElement'

function diffComponent(virtualDom, oldComponent, oldDom, root) {
  // 判断是否是同一组件更新
  if (isSameComponent(virtualDom, oldComponent)) {
    // 同一组件
    console.log('同一组件')
  } else {
    // 不同组件
    mountElement(virtualDom, root, oldDom)
    console.log('不同是一组件')
  }
}

function isSameComponent(virtualDom, oldComponent) {
  return oldComponent && virtualDom.type === oldComponent.constructor
}

export default diffComponent