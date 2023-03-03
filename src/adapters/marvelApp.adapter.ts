import { IApiMovies } from "models/IApiMovies";
import { IMovies } from "models/IMovies";

export const moviesAdapter = (movies: IApiMovies): IMovies => {
  const filteredMovies = movies.filter(({ thumbnail: { path } }) => !path.includes("image_not_available"));

  return filteredMovies.map(({ title, startYear, urls, thumbnail }) => {
    // format the title from "2020 iWolverine (2020)" to "iWolverine"
    let splittedTitle = title.split(" ");
    splittedTitle.shift();
    const formattedTitle = splittedTitle.join(" ").split("(")[0];

    return {
      title: formattedTitle,
      startYear: startYear,
      url: urls[0].url,
      thumbnailURL: `${thumbnail.path}.${thumbnail.extension}`,
    };
  });
};
