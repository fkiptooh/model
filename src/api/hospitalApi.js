import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/hospitals/";

export function getHospitals() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getHospitalBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(hospitals => {
        if (hospitals.length !== 1) throw new Error("hospital not found: " + slug);
        return hospitals[0]; // should only find one hospital for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveHospital(hospital) {
  return fetch(baseUrl + (hospital.id || ""), {
    method: hospital.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...hospital,
      levelId: parseInt(hospital.levelId, 5)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHospital(hospitalId) {
  return fetch(baseUrl + hospitalId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
