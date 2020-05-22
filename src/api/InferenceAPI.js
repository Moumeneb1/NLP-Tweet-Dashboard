import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "127.0.0.1:4000" + "/authors/";

export function getFieldsModels() {
  return fetch(baseUrl + "/get_FieldsModels")
    .then(handleResponse)
    .catch(handleError);
}

export function getInference(datasetID, FieldModel) {
  return fetch(baseUrl + "inference", {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify("data"),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteAuthor(authorId) {
  return fetch(baseUrl + authorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
