import mountNativeElement from './mountNativeElement'
function mountComponent(virtualDom, root) {
  // 组件 or native
  mountNativeElement(virtualDom, root);
}

export default mountComponent