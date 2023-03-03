import { moviesAdapter } from "adapters/marvelApp.adapter";

const API_URL = "https://eip-marvel-app.herokuapp.com";
const SERIES_ENDPOINT = "/series";

const fecthMovies = async () => {
  const response =  await fetch(`${API_URL}${SERIES_ENDPOINT}`);
  if (response.status !== 200) throw new Error('Error fetching data');
  const movies = await response.json();
  return moviesAdapter(movies.data.results);
};

export const MarvelAppService = {
  fecthMovies,
};
