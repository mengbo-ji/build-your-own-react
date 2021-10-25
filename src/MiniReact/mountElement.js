import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent'
import isFunction from './isFunction'

function mountElement(virtualDom, root) {
  // 组件 or native
  if (isFunction(virtualDom)) {
    // 函数式组件或者类组件
    mountComponent(virtualDom, root)
  } else {
    // 原生组件
    mountNativeElement(virtualDom, root);
  }
}

export default mountElement