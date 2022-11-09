import giphyLogo from "../../images/marvel-logo.png";

import classes from "./MainHeader.module.css";



const MainHeader = () => {

  return (
    <header className={classes.header}>
      <a href="https://www.marvel.com/">
        <img src={giphyLogo}></img>
      </a>
    </header>
  );
};



export default MainHeader;
