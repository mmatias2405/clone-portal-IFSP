import React from "https://unpkg.com/react@16/umd/react.production.min.js";
import ReactDOM from "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js";

class Test extends React.Component {
    render() {
      return <h1> Hello World </h1>;
    }
  }
  
 ReactDOM.render(<Test />, document.getElementById('root'));