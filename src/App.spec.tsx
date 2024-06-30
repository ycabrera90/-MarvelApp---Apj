import "@testing-library/jest-dom"
import { render, screen, act, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "redux/app/store"
import mockFetch from "jest-fetch-mock"
import moviesApiData from "data/apiMovies.json"
import { MSSG } from "global/messages"
import App from "./App"

const appFactory = async () => {
	mockFetch.mockResponse((req) => {
		if (req.url.includes("eip-marvel-app.herokuapp.com")) {
			return Promise.resolve(JSON.stringify(moviesApiData))
		}
		return Promise.reject(new Error("not mapped url"))
	})

	render(
		<Provider store={store}>
			<App />;
		</Provider>
	)
}

describe("App Component", () => {
	beforeEach(() => {
		mockFetch.enableMocks()
		mockFetch.resetMocks()
	})

	it("the component should be render with DOM content inside of it", async () => {
		await appFactory()
		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("fulfilled")
		)
		expect(screen.getByTestId("my-app")).not.toBeEmptyDOMElement()
	})

	it("the component should load the movies", async () => {
		await appFactory()
		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("fulfilled")
		)
		expect(store.getState().movies.data.length).not.toBe(0)
	})

	it("the component should set a MSSG.ALERT state if the fetch of movies are pending", async () => {
		await appFactory()
		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("pending")
		)
		expect(store.getState().ui.message).toBe(MSSG.ALERT)
		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("fulfilled")
		)
	})

	it("the component should set a MSSG.HOME state if the fetch of movies are fulfilled", async () => {
		await appFactory()
		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("fulfilled")
		)
		expect(store.getState().ui.message).toBe(MSSG.HOME)
	})

	it("the component should set a MSSG.ERROR state if the fetch of movies are rejected", async () => {
		mockFetch.mockResponse((req) =>
			Promise.reject(new Error("not mapped url"))
		)

		render(
			<Provider store={store}>
				<App />;
			</Provider>
		)

		await waitFor(() =>
			expect(store.getState().movies.PromiseState).toBe("rejected")
		)

		expect(store.getState().ui.message).toBe(MSSG.ERROR)
	})
})
