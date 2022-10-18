import React from "react";
import classes from "./MainHeader.module.css";
import { useHistory } from "react-router-dom";

import giphyLogo from "../../images/marvel-logo.png";

const MainHeader = () => {
  const history = useHistory();

  const logoClickFunctionHandler = () => {
    history.push(`https://www.marvel.com/`);
  };

  return (
    <header className={classes.header}>
      <a href="https://www.marvel.com/">
        <img src={giphyLogo}></img>
      </a>
    </header>
  );
};

export default MainHeader;
