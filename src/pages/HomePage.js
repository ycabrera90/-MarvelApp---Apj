import React, { useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import useHTTP from "../hooks/use-HTTP";
import ItemGrid from "../components/ItemGrid/ItemGrid";

import {
  API_URL,
  SERIES_ENDPOINT,
  PUBLIC_KEY,
  TIME_STAMP,
  MD5_HASH,
} from "../credentials";

const TEXT_MSSG = { text: "MARVEL SERIES", type: "message" };
const ALERT_MSSG = { text: "Loading...", type: "alert" };
const ERROR_MSSG = {
  text: "Sorry 😔. Something went wrong",
  type: "error",
};
let firstMount = false;

let fetchedDatas = [];

const URL_SERIES = `${API_URL}${SERIES_ENDPOINT}?apikey=${PUBLIC_KEY}&ts=${TIME_STAMP}&hash=${MD5_HASH}`;

const HomePage = () => {
  const { isLoading, error, sendRequest } = useHTTP();
  const dispatch = useDispatch();

  const getFetchedDatas = (datas) => {
    fetchedDatas = datas.data.results.reduce((previousValue, currentValue) => {
      const { id, title, startYear, thumbnail, urls } = currentValue;
      if (thumbnail.path.includes("image_not_available")) {
        return previousValue;
      }
      const thumbnailURL = `${thumbnail.path}.${thumbnail.extension}`;
      const url = urls[0].url;
      return [...previousValue, { id, title, startYear, thumbnailURL, url }];
    }, []);
  };

  useEffect(() => {
    sendRequest({ url: URL_SERIES }, getFetchedDatas);
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(ALERT_MSSG));
      }
      if (!isLoading && !error) {
        dispatch(uiActions.sendMessage(TEXT_MSSG));
      }
    } else {
      firstMount = false;
    }
  }, [isLoading, error]);
  return <ItemGrid datas={fetchedDatas} />;
};

export default HomePage;
