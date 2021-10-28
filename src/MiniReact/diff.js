import mountElement from './mountElement';
import updateTextNode from './updateTextNode';
import updateNodeElement from './updateNodeElement';
import createDomElement from './createDomElement';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';

function diff (virtualDom, root, oldDom) {
  const oldVirtaulDom = oldDom && oldDom._virtualDom
  const oldComponent = oldVirtaulDom && oldVirtaulDom.component;
  if (!oldDom) {
    mountElement(virtualDom, root)
  } else if (virtualDom.type !== oldVirtaulDom.type && typeof virtualDom.type !== 'function') {
    const newElement = createDomElement(virtualDom)
    oldDom.parentNode.replaceChild(newElement, oldDom)
  } else if (typeof virtualDom.type === 'function') {
    // 组件更新
    diffComponent(virtualDom, oldComponent, oldDom, root)
  } else if (oldVirtaulDom && virtualDom.type === oldVirtaulDom.type) {
    if (virtualDom.type === 'text') {
      // 更新内容
      updateTextNode(virtualDom, oldVirtaulDom, oldDom)
    } else {
      // 更新元素属性
      updateNodeElement(oldDom, virtualDom, oldVirtaulDom)
    }

    virtualDom.children.forEach((child, idx) => {
      diff(child, oldDom, oldDom.childNodes[idx])
    })

    // 删除节点
    const oldChildNodes = oldDom.childNodes;
    if (oldChildNodes.length > virtualDom.children.length) {
      // 要删除对应节点
      for (let i = oldChildNodes.length - 1; i > virtualDom.children.length - 1; i--) {
        unmountNode(oldChildNodes[i]);
      }
    }
  }
}

export default diff