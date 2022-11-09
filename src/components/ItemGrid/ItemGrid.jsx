import classes from "./ItemGrid.module.css";



const ItemGrid = ({ datas: itemList }) => {
  const items = itemList.map(({ id, title, startYear, url, thumbnailURL }) => {

    // format the title from "2020 iWolverine (2020)" to "iWolverine"
    let formattedTitle = title.split(" ");
    formattedTitle.shift();
    formattedTitle = formattedTitle.join(" ");
    formattedTitle = formattedTitle.split("(")[0];

    return (
      <section key={id} id={id}>
        <a href={`${url}`}>
          <h1>{startYear}</h1>
          <p>{formattedTitle}</p>
        </a>
        <img src={thumbnailURL}></img>
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
