import React from "react";
import classes from "./ItemGrid.module.css";

let scrollEvents = true;

const ItemGrid = (props) => {
  const { datas: itemList } = props;

  let itemId = 0;

  const items = itemList.map((item) => {
    let title = item.title.split(" ");
    title.shift();
    title = title.join(" ");
    title = title.split("(")[0];
    return (
      <section key={item.id} id={item.id}>
        <a href={`${item.url}`}>
          <h1>{item.startYear}</h1>
          <p>{title}</p>
        </a>
        <img src={item.thumbnailURL}></img>
      </section>
    );
  });

  return (
    <>
      <div className={classes.background} />
      <main className={classes.main}>
        <div className={classes["images-container"]}>{items}</div>
      </main>
    </>
  );
};

export default ItemGrid;
