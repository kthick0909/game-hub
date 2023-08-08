import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
  
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fc145263371a4410b672e21255923b05"
    }
})