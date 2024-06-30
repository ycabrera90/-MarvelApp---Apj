import { FC, memo, useEffect, useState } from "react"
import { useAppSelector } from "redux/app/hooks"
import { selectMovies } from "redux/reducers/movies.selectors"
import styles from "./MovieCards.module.scss"

export interface IMovieCards {}

const MovieCards: FC<IMovieCards> = ({}) => {
	const movies = useAppSelector(selectMovies)

	return (
		<main
			className={`${styles.main} ${styles["styled-scrollbar"]}`}
			data-testid="MovieCards"
		>
			<div className={styles["images-container"]}>
				{movies.map(
					({ startYear, thumbnailURL, title, url }, index) => (
						<section
							className={styles.card}
							key={index}
							data-testid="MovieCard"
						>
							<a href={`${url}`}>
								<h1>{startYear}</h1>
								<p>{title}</p>
							</a>
							<img src={thumbnailURL}></img>
						</section>
					)
				)}
			</div>
		</main>
	)
}

export default memo(MovieCards)
