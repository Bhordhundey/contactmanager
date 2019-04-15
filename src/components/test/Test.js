import React, { Component } from 'react'

class Test extends Component {
    state = {
        id: '',
        title: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => this.setState({
            id: data.id,
            title: data.title
        }))
    };

    // componentWillMount() {
    //     console.log("componentWillMount")
    // };

    // componentDidUpdate() {
    //     console.log("componentDidUpdate")
    // };

    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // };

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps")
    // };

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test: 'something'
    //     }
    // };

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate")
    // }


  render() {
      const { title, id} = this.state;
    return (
      <div>
        <h1>{id}</h1>
        <p>{title}</p>
      </div>
    )
  }
}

export default Test;
