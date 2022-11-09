import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "../store/ui-slice";
import useHTTP from "../hooks/use-HTTP";
import { URL_SERIES } from "../store/urls";
import MSSG from "../store/messages";

import ItemGrid from "../components/ItemGrid/ItemGrid";



let firstMount = false;
let fetchedDatas = [];

const HomePage = () => {
  const { isLoading, error, sendRequest } = useHTTP();
  const dispatch = useDispatch();

  const getFetchedDatas = ({ data }) => {
    fetchedDatas = data.results.reduce((previousValue, { id, title, startYear, thumbnail, urls }) => {
        if (thumbnail.path.includes("image_not_available")) {
          return previousValue;
        }

        const thumbnailURL = `${thumbnail.path}.${thumbnail.extension}`;
        const url = urls[0].url;

        return [...previousValue, { id, title, startYear, thumbnailURL, url }];
    },[]);
  };

  useEffect(() => {
    sendRequest({ url: URL_SERIES }, getFetchedDatas);
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(MSSG.ERROR));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(MSSG.ALERT));
      }
      if (!isLoading && !error) {
        dispatch(uiActions.sendMessage(MSSG.HOME));
      }
    } else {
      firstMount = false;
    }
  }, [isLoading, error]);

  return <ItemGrid datas={fetchedDatas} />;
};



export default HomePage;
