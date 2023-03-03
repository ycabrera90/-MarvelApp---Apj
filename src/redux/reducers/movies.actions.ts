import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovies } from "models/IMovies";
import { MarvelAppService } from "service/marvelApp.service";

export const fetchMovies = createAsyncThunk<IMovies>(
  "movies/fetchMovies",
  MarvelAppService.fecthMovies
);
