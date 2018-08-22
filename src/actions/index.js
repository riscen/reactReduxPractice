import { ADD_ARTICLE } from "../constants/action-names";

/**
 * This action adds an article to the store state
 * Action: ADD_ARTICLE
 * Payload: Article
 */
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
