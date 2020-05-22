import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "127.0.0.1:4000";

export function getTweets(limit, beginDate, endDate, tags) {
  let data = {
    limit: limit,
    begin_date: beginDate,
    end_date: endDate,
    keywords: tags,
  };

  return fetch(baseUrl + "/scrap_tweets/", {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
