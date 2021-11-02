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

    let keyElements = {}
    // 1. 将拥有key属性的子元素放置在一个单独的对象中
    for (let i = 0, len = oldDom.childNodes.length; i < len; i++) {
      let dom = oldDom.childNodes[i]
      if (dom.nodeType === 1) {
        let key = dom.getAttribute('key')
        if (key) {
          keyElements[key] = dom
        }
      }
    }
    let hasNoKey = Object.keys(keyElements).length === 0

    if (hasNoKey) {
      virtualDom.children.forEach((child, idx) => {
        diff(child, oldDom, oldDom.childNodes[idx])
      })
    } else {
      // 2. 循环 virtualDom的子元素 获取子元素的key属性
      virtualDom.children.forEach((child, i) => {
        let key = child.props.key
        if (key) {
          let domElement = keyElements[key]
          if (domElement) {
            // 3. 判断当前位置的元素是不是 期望的元素
            if (oldDom.childNodes[i] && oldDom.childNodes[i] !== domElement) {
              oldDom.insertBefore(domElement, oldDom.childNodes[i])
            }
          }
        }
      })
    }

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