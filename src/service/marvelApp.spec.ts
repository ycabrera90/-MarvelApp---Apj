import { MarvelAppService } from "./marvelApp.service";
import moviesData from "data/movies.json";

describe("MarvelApp Service", () => {
  it("should return the monsters list empty", async () => {
    jest.spyOn(MarvelAppService, "fecthMovies").mockResolvedValue(moviesData);
    const response = await MarvelAppService.fecthMovies();
    expect(response).toEqual(moviesData);
  });
});
