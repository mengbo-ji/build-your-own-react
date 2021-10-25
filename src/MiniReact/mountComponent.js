import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';

function mountComponent(virtualDom, root) {
  let nextVirtualDom = null;
  if (isFunctionComponent(virtualDom)) {
    // 函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom)
  } else {
    // 类组件
    nextVirtualDom = buildClassComponent(virtualDom)
  }
  if (isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, root)
  } else {
    mountNativeElement(nextVirtualDom, root)
  }
}

function buildFunctionComponent(virtualDom) {
  return virtualDom.type(virtualDom.props || {})
}

function buildClassComponent(virtualDom) {
  const component = new virtualDom.type(virtualDom.props || {});
  return component.render();
}

export default mountComponent