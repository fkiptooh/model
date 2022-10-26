import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/levels/";

export function getLevel() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveLevel(level) {
  return fetch(baseUrl + (level.id || ""), {
    method: level.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(level)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteLevel(levelId) {
  return fetch(baseUrl + levelId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
