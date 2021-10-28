import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent'
import isFunction from './isFunction'

function mountElement(virtualDom, root, oldDom) {
  // 组件 or native
  if (isFunction(virtualDom)) {
    // 函数式组件或者类组件
    mountComponent(virtualDom, root, oldDom)
  } else {
    // 原生组件
    mountNativeElement(virtualDom, root, oldDom);
  }
}

export default mountElement