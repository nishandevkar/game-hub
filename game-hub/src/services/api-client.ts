import axios from "axios";

export interface FetchResponse <T>{
	count: number;
	results: T[];
}
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'09ed53246d1e4da8a3dedefaf38943e0'
    }
})