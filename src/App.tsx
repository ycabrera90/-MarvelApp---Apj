import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "redux/app/hooks"
import { fetchMovies } from "redux/reducers/movies.actions"
import { selectFetchMoviesPromiseState } from "redux/reducers/movies.selectors"
import { sendMessage } from "redux/reducers/ui.actions"
import { MSSG } from "global/messages"
import MainHeader from "components/MainHeader/MainHeader"
import MovieCards from "components/MovieCards/MovieCards"
import "App.scss"

const App: FC = () => {
	const dispatch = useAppDispatch()
	const fetchMoviesPromiseState = useAppSelector(
		selectFetchMoviesPromiseState
	)

	useEffect(() => {
		dispatch(fetchMovies())
	}, [])

	useEffect(() => {
		switch (fetchMoviesPromiseState) {
			case "pending":
				dispatch(sendMessage(MSSG.ALERT))
				break
			case "fulfilled":
				dispatch(sendMessage(MSSG.HOME))
				break
			case "rejected":
				dispatch(sendMessage(MSSG.ERROR))
				break
		}
	}, [fetchMoviesPromiseState])

	return (
		<div id="my-app" data-testid="my-app">
			<MainHeader />
			<MovieCards />
		</div>
	)
}

export default App
