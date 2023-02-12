import axios from "axios";

export const api = axios.create({
  baseURL: "https://anime-db.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "cedc5895aamsh98ff597b46f1156p1a5c3ajsnab0ef4544aeb",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
});
