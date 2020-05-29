import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = "127.0.0.1:4000";

export function getTweets(limit, beginDate, endDate, tags) {
  var data = {
    limit_scrap: limit,
    begin_date: beginDate,
    end_date: endDate,
    keywords: tags,
  };

  console.log(JSON.stringify(data));
  return axios.post("http://20.43.35.75:4000/api/scrap_tweets/", data);
}
