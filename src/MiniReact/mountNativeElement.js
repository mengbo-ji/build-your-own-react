import createDomElement from './createDomElement'
import unmountNode from './unmountNode';
function mountNativeElement(virtualDom, root, oldDom) {
  // 添加之前如果旧的dom存在 删除
  if (oldDom) {
    unmountNode(oldDom)
  }
  let nativeElement = createDomElement(virtualDom);
  root.appendChild(nativeElement)

  if (virtualDom.component) {
    virtualDom.component.setDom(nativeElement)
  }
}

export default mountNativeElement