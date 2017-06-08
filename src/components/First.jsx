import React from 'react';


export default class First extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ width: '50%', margin: '0 auto' }}>
          Hello! I’m JSX
        </h1>

        <button onClick={ this.makeErrorToConsoleLog }>
          Click me for error to console.log (test of source-map)
        </button>
      </div>
    )
  }

  makeErrorToConsoleLog() {
    // test for source-map
    this.error();
  }
}
