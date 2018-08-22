import React from "react";
import { connect } from "react-redux";

/**
 * Pass state's articles to component props
 */
const mapStateToProps = state => {
  return { articles: state.articles };
};

/**
 * Returns a jsx of the state's articles received from props
 */
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => {
      return (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      );
    })}
  </ul>
);

/**
 * Connects the react component with redux
 */
const List = connect(mapStateToProps)(ConnectedList);

export default List;
