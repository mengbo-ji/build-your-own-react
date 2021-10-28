import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';

function mountComponent(virtualDom, root, oldDom) {
  let nextVirtualDom = null;
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom)
  } else {
    // 类组件
    nextVirtualDom = buildClassComponent(virtualDom)
  }
  if (isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, root, oldDom)
  } else {
    mountNativeElement(nextVirtualDom, root, oldDom)
  }
}

function buildFunctionComponent(virtualDom) {
  return virtualDom.type(virtualDom.props || {})
}

function buildClassComponent(virtualDom) {
  const component = new virtualDom.type(virtualDom.props || {})
  const nextVirtualDom = component.render()
  nextVirtualDom.component = component
  return nextVirtualDom
}

export default mountComponent