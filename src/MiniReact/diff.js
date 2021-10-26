import mountElement from './mountElement';
import updateTextNode from './updateTextNode';

function diff(virtualDom, root, oldDom) {
  const oldVirtaulDom = oldDom && oldDom._virtualDom
  if (!oldDom) {
    mountElement(virtualDom, root)
  } else {
    if(oldVirtaulDom && virtualDom.type === oldVirtaulDom.type) {
      if (virtualDom.type === 'text') {
        // 更新内容
        updateTextNode(virtualDom, oldVirtaulDom, oldDom)
      } else {
        // 更新元素属性
      }

      virtualDom.children.forEach((child, idx) => {
        diff(child, oldDom, oldDom.childNodes[idx])
      })
    }
  }
}

export default diff