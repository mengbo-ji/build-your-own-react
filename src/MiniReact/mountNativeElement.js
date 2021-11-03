import createDomElement from './createDomElement'
import unmountNode from './unmountNode';
function mountNativeElement(virtualDom, root, oldDom) {

  let newElement = createDomElement(virtualDom);
  
  if (oldDom) {
    root.insertBefore(newElement, oldDom)
  } else {
    root.appendChild(newElement)
  }
  // 添加之前如果旧的dom存在 删除
  if (oldDom) {
    unmountNode(oldDom)
  }
  if (virtualDom.component) {
    virtualDom.component.setDom(newElement)
  }
}

export default mountNativeElement