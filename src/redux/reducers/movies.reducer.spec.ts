import { fetchMovies } from "./movies.actions"
import { initialState, moviesReducer } from "./movies.reducer"
import movieData from "data/movies.json"

describe("Movies Reducer", () => {
	it("should return the initial state", () => {
		const state = moviesReducer(undefined, { type: undefined })
		expect(state).toEqual(initialState)
	})

	it("only the PromiseState field should change to pending when the fetchMovies action is pending", () => {
		const action = { type: fetchMovies.pending }
		const state = moviesReducer(initialState, action)
		expect(state).toEqual({ ...initialState, PromiseState: "pending" })
	})

	it("only the PromiseState field should change to pending when the fetchMovies action is pending", () => {
		const action = { type: fetchMovies.pending, payload: movieData }
		const state = moviesReducer(initialState, action)
		expect(state).toEqual({ ...initialState, PromiseState: "pending" })
	})

	it("the PromiseState field should fulfilled to pending when the fetchMovies action is pending", () => {
		const action = { type: fetchMovies.fulfilled, payload: movieData }
		const state = moviesReducer(initialState, action)
		expect(state.PromiseState).toEqual("fulfilled")
	})

	it("the data field should be updated with the payload when the fetchMovies action is fulfilled", () => {
		const action = { type: fetchMovies.fulfilled, payload: movieData }
		const state = moviesReducer(initialState, action)
		expect(state.data).toEqual(movieData)
	})
})
