import { moviesAdapter } from "adapters/marvelApp.adapter"
import { ENDPOINTS } from "../constants/Endpoints"

const fetchMovies = async () => {
	const response = await fetch(`${ENDPOINTS.API_URL}${ENDPOINTS.SERIES}`)
	if (response.status !== 200) throw new Error("Error fetching data")
	const movies = await response.json()
	return moviesAdapter(movies.data.results)
}

export const MarvelAppService = {
	fetchMovies,
}
