import { RootState } from "redux/app/store"

export const selectMovies = (state: RootState) => state.movies.data

export const selectFetchMoviesPromiseState = (state: RootState) =>
	state.movies.PromiseState
