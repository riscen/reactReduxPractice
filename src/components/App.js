import React from "react";
import List from "./List";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Articles</h2>
          {/*<List />*/}
        </div>
        {/*<div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>*/}
      </div>
    );
  }
}

export default App;
