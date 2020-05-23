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
  return axios.post("http://localhost:4000/api/predict_dataframe", data);
}
