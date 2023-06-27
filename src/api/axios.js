import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2fc5348eee7a823cdb238fde0937c529",
    language: "ko-KR",
  },
});
