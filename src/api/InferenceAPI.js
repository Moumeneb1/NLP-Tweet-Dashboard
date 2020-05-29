import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = "127.0.0.1:4000";

export function getInference(session_token, field_model_path) {
  let [field, model_name] = field_model_path.split("/");
  var data = {
    session_token: session_token,
    field: field,
    model_name: model_name,
  };

  console.log(JSON.stringify(data));
  return axios.post("http://20.43.35.75:4000/api/predict_dataframe", data);
}

export function getInferenceText(text, field_model_path) {
  let [field, model_name] = field_model_path.split("/");
  var data = {
    text: text,
    field: field,
    model_name: model_name,
  };

  console.log(JSON.stringify(data));
  return axios.post("http://20.43.35.75:4000/api/predict_onetweet", data);
}

export function getFieldsModels() {
  return axios.get("http://20.43.35.75:4000/api/get_all_models/");
}

export function getFieldsNoFeaturesModels() {
  return axios.get("http://20.43.35.75:4000/api/get_noFeatures_models/");
}
