import createDomElement from './createDomElement'
function mountNativeElement(virtualDom, root) {
  let nativeElement = createDomElement(virtualDom);
  root.appendChild(nativeElement)

  if (virtualDom.component) {
    virtualDom.component.setDom(nativeElement)
  }
}

export default mountNativeElement