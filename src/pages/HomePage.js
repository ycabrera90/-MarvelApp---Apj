import React, { useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import useHTTP from "../hooks/use-HTTP";
import ItemGrid from "../components/ItemGrid/ItemGrid";

const API_URL = "https://eip-marvel-app.herokuapp.com";
const SERIES_ENDPOINT = "/series";

const TEXT_MSSG = { text: "MARVEL SERIES", type: "message" };
const ALERT_MSSG = { text: "Loading...", type: "alert" };
const ERROR_MSSG = {
  text: "Sorry 😔. Something went wrong",
  type: "error",
};

let firstMount = false;
let fetchedDatas = [];

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
    sendRequest({ url: `${API_URL}${SERIES_ENDPOINT}` }, getFetchedDatas);
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
