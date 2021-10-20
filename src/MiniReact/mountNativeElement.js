import createDomElement from './createDomElement'
function mountNativeElement(virtualDom, root) {
  let nativeElement = createDomElement(virtualDom);
  root.appendChild(nativeElement)
}

export default mountNativeElement