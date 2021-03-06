import React from "react"

class Counter extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Current count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>minus</button>
                <br/>
                <a href="/">Return home</a>
            </div>
        )
    }
}

export default Counter;