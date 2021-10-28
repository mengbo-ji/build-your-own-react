export default class Component {
  constructor(props){
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    const virtualDom = this.render()
    const oldVirtualDom = this.getDom()
    console.log('oldVirtualDom', oldVirtualDom)
    console.log('virtualDom', virtualDom)
  }
  setDom(dom) {
    this._dom = dom
  }
  getDom() {
    return this._dom
  }
}