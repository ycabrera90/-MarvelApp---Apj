import { FC, memo } from "react"
import giphyLogo from "assets/png/marvel-logo.png"
import styles from "./MainHeader.module.scss"

export interface IMainHeader {}

const MainHeader: FC<IMainHeader> = ({}) => {
	return (
		<header className={styles.container} data-testid="MainHeader">
			<a href="https://www.marvel.com/">
				<img src={giphyLogo}></img>
			</a>
		</header>
	)
}

export default memo(MainHeader)
