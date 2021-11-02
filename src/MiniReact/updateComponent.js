import diff from './diff';

function updateComponent(virtualDom, oldComponent, oldDom, root) {
  // 组件更新
  oldComponent.componentWillReceiveProps(virtualDom.props)
  if (oldComponent.shouldComponentUpdate(virtualDom.props)) {
    // 未更新前的props
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDom.props)
    // 组件更新
    oldComponent.updateProps(virtualDom.props)
    // 获取组件返回的最新的virtualDom
    let nextVritualDom = oldComponent.render()
    // nextVritualDom.component = oldComponent
    // 对比
    diff(nextVritualDom, root, oldDom)
    oldComponent.componentDidUpdate(prevProps)
  }
}

export default updateComponent;