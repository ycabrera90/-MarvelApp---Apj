import { createReducer } from "@reduxjs/toolkit"
import { IMoviesState } from "models/IMoviesState"
import { fetchMovies } from "./movies.actions"

export const initialState: IMoviesState = {
	PromiseState: "fulfilled",
	data: [],
}

export const moviesReducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchMovies.pending, (state) => {
		return { ...state, PromiseState: "pending" }
	})

	builder.addCase(fetchMovies.fulfilled, (state, action) => {
		return { data: action.payload, PromiseState: "fulfilled" }
	})

	builder.addCase(fetchMovies.rejected, (state) => {
		return { ...state, PromiseState: "rejected" }
	})
})
