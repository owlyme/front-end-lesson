import React, {Component} from "./react"
const root = document.getElementById("root")
const jsx1= <div><h2 className="x1">jsx1</h2><p className="x1">jsx1</p></div>
const jsx2= <div><h2 className="x1">jsx2</h2></div>

const Hello = ({title}) => {
   return <div>Hello world {title}</div>
}

class Hi extends Component {
   constructor (props) {
      super(props)
      this.state = {
         title: '123'
      }
   }

   onClick = () => {
      this.setState({
         title: "555"
      })
   }

   render() {
      return <div onClick={this.onClick}>Hello world {this.state.title}</div>
   }
}

React.render(<Hi title="123132"/>, root)

// setTimeout(() => {
//    React.render(<Hi title="55555"/>, root)
// }, 2000)