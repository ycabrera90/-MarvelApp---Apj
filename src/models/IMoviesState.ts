import { IMovies } from "./IMovies"

export interface IMoviesState {
	PromiseState: "pending" | "fulfilled" | "rejected"
	data: IMovies
}
