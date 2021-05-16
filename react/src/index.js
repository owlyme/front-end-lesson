import TinyReact from "./TinyReact"
import Component from "./TinyReact/Component"

const App = (<ul>
  <li key="1">1111</li>
  <li>2222</li>
  <li>3333</li>
  <li>4444</li>
</ul>)


// console.log(App)
// TinyReact.render(App, document.getElementById("root"))

function Hello({children}) {
  return <div>Hello </div>
}


class ClassComp extends TinyReact.Component {

  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
    this.setCount = this.setCount.bind(this)
  }

  setCount() {

    this.setState({
      num: this.state.num + 1
    })

  }

  render() {
    return <div>ClassComp {this.state.num}<button onClick={this.setCount}>++</button></div>
  }
}



const App1 = (<div className="container">
<div>你好 Tiny React 1<div>123</div></div>
<h2 data-test="test">(编码必杀技)</h2>
<div>
  嵌套1 <div>嵌套 1.1.1</div>
</div>
<h3>(观察: 这个将会被改变)</h3>
{2 == 1 && <div>如果2和1相等渲染当前内容</div>}
{2 == 2 && <div>2</div>}
<span>这是一段内容</span>
<button onClick={() => alert("你好2222")}>点击我</button>

2, 3
<input type="text" value="13" />
</div>)

class ClassComp1 extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      ref: null
    }
    this.setCount = this.setCount.bind(this)
  }

  setCount() {
    this.setState({
      num: this.state.num + 1
    })
  }


  componentWillReceiveProps(nextProps) {
    // debugger
  }

  componentWillUpdate(nextProps, nextState) {
    // debugger
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(this.state.ref)
  }

  render() {
    return <div  ref={(value) => this.state.ref = value}>ClassComp 123 {this.props.title}</div>
  }
}

// let ref =null ;
// TinyReact.render(<ClassComp1 ref={val => ref = val} title="classComp1"/>, document.getElementById("root"))

// setTimeout(() => {
//   console.log(ref)
//   TinyReact.render(<ClassComp1  title="classComp1111"/>, document.getElementById("root"))
// }, 2000)


class UlList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1,2,3]
    }
  }

  render() {
    return <ul>
      {
        this.state.list.map(i => (<li key={i}>{i}</li>))
      }
    </ul>
  }
}

TinyReact.render(<UlList  title="classComp1111"/>, document.getElementById("root"))