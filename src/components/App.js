import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div>
    <div>
      <h2>Articles</h2>
      {console.log("About to load list")}
      <List />;
      {console.log("List loaded")}
    </div>
    {/*<div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>*/}
  </div>
);

export default App;
