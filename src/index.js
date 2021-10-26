import MiniReact from './MiniReact'

const root = document.getElementById("root")

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div data-test="1">
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段被修改过的内容</span>
    <button onClick={() => alert("你好~~~")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

MiniReact.render(virtualDOM, root)

setTimeout(() => {
  MiniReact.render(modifyDOM, root)
}, 2000)

const Hello = () => <div> Hello React </div>
const Hello1 = (props) => {
  return (
    <div>
      <p> {props.title} </p>
      🦁<Hello /> 
    </div>
  )
}

// MiniReact.render(<Hello1 title={'你好 React'}/>, root)

class Foo extends MiniReact.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        Hello ClassComponent
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    )
  }
}

// MiniReact.render(<Foo name={'React'} age={18}/>, root)