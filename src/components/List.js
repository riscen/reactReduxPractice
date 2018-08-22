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
  <ul>
    {articles.map(el => {
      return <li key={el.id}>{el.title}</li>;
    })}
  </ul>
);

/**
 * Connects the react component with redux
 */
const List = connect(mapStateToProps)(ConnectedList);

export default List;
