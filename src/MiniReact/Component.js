import diff from "./diff"

export default class Component {
  constructor(props){
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取新的虚拟dom
    const virtualDom = this.render()
    // 获取旧dom
    const oldDom = this.getDom()
    // 获取容器
    const container = oldDom.parentNode
    diff(virtualDom,container, oldDom)
  }
  setDom(dom) {
    this._dom = dom
  }
  getDom() {
    return this._dom
  }
}