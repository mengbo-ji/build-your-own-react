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
    <button onClick={() => alert("你好~~~")}>点击我</button>
    <input type="text" value="13" />
  </div>
)

// MiniReact.render(virtualDOM, root)

// setTimeout(() => {
//   MiniReact.render(modifyDOM, root)
// }, 2000)

const Hello = (props) => <div> {props.title} </div>
const Hello1 = (props) => <div> {props.title} </div>

// MiniReact.render(<Hello title={'Hello'}/>, root)
// setTimeout(() => {
//   MiniReact.render(<Hello title={'Hello1'}/>, root)
// }, 2000)

class RefDemo extends MiniReact.Component {
  render () {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}


class Foo extends MiniReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Detault Title'
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps1', nextProps)
  }

  componentWillUpdate (nextProps) {
    console.log('nextProps2', nextProps)
  }

  componentDidUpdate (prevProps) {
    console.log('prevProps', prevProps)
  }

  handleClick = () => {
    this.setState({
      title: 'Changed Title'
    })
  }

  handleClick1 = () => {
    console.log(this.elRef.value)
    console.log(this.refDemo)
  }

  render () {
    console.log(this.state)
    return (
      <div>
        Hello ClassComponent
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <div>
          {this.state.title}
          <button onClick={this.handleClick}> 改变Title </button>
        </div>
        <div>
          <input ref={el => (this.elRef = el)} />
          <button onClick={this.handleClick1}> 按钮 </button>
          <RefDemo ref={refDemo => (this.refDemo = refDemo)} name={'RefDemo'} />
        </div>
      </div>
    )
  }
}

// MiniReact.render(<Foo name={'React'} age={18}/>, root)
// setTimeout(() => {
//   MiniReact.render(<Foo name={'Update React'} age={180}/>, root)
// }, 2000)

class KeyDemo extends MiniReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          id: 1,
          name: "张三"
        },
        {
          id: 2,
          name: "李四"
        },
        {
          id: 3,
          name: "王五"
        },
        {
          id: 4,
          name: "赵六"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.persons.push(newState.persons.shift())
    // newState.persons.splice(1, 0, { id: 100, name: "李逵" })
    // newState.persons.pop()
    this.setState(newState)
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}>
              {person.name}
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
MiniReact.render(<KeyDemo />, root)