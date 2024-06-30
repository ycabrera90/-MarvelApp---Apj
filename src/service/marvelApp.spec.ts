import { MarvelAppService } from "./marvelApp.service"
import moviesData from "data/movies.json"

describe("MarvelApp Service", () => {
	it("should return the monsters list empty", async () => {
		jest.spyOn(MarvelAppService, "fetchMovies").mockResolvedValue(
			moviesData
		)
		const response = await MarvelAppService.fetchMovies()
		expect(response).toEqual(moviesData)
	})
})
