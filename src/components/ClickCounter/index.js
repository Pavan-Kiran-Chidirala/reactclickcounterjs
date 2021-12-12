// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Increment = () => {
    this.setState(prevSate => ({count: prevSate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-holder">
        <h1 className="main-heading">
          The Button has been clicked <span className="violet">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.Increment}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
