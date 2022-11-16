import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import MovieCards from "./MovieCards";
import mockFetch from "jest-fetch-mock";
import moviesApiData from "data/apiMovies.json";
import { fetchMovies } from "redux/reducers/movies.actions";

const MovieCardsFactory = async () => {
  mockFetch.mockResponse((req) => {
    if (req.url.includes("eip-marvel-app.herokuapp.com")) {
      return Promise.resolve(JSON.stringify(moviesApiData));
    }
    return Promise.reject(new Error("not mapped url"));
  });

  render(
    <Provider store={store}>
      <MovieCards />
    </Provider>
  );
};

describe("MovieCards Component", () => {
  beforeEach(() => {
    mockFetch.enableMocks();
    mockFetch.resetMocks();
  });

  it("the component should be render with DOM content inside of it", async () => {
    await MovieCardsFactory();
    expect(screen.getByTestId("MovieCards")).not.toBeEmptyDOMElement();
  });

  it("the number of cards should be equal to the number of movies in the store", async () => {
    MovieCardsFactory();
    store.dispatch(fetchMovies());
    await waitFor(() =>
      expect(store.getState().movies.PromiseState).toBe("fulfilled")
    );
    const cards = await screen.findAllByTestId("MovieCard");
    expect(cards.length).toBe(store.getState().movies.data.length);
  });
});
