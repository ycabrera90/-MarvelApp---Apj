interface IUrl {
	type: string
	url: string
}

interface IThumbnail {
	path: string
	extension: string
}

interface ICreators {
	available: number
	collectionURI: string
	items: IItem[]
	returned: number
}

interface IItem {
	resourceURI: string
	name: string
	role?: string
	type?: string
}

interface ICharacters {
	available: number
	collectionURI: string
	items: IItem[]
	returned: number
}

interface IStories {
	available: number
	collectionURI: string
	items: IItem[]
	returned: number
}

interface IComics {
	available: number
	collectionURI: string
	items: IItem[]
	returned: number
}

interface IEvents {
	available: number
	collectionURI: string
	items: IItem[]
	returned: number
}

interface INext {
	resourceURI: string
	name: string
}

interface IPrevious {
	resourceURI: string
	name: string
}

interface IMovie {
	id: number
	title: string
	description: string | null
	resourceURI: string
	urls: IUrl[]
	startYear: number
	endYear: number
	rating: string
	type: string
	modified: string
	thumbnail: IThumbnail
	creators: ICreators
	characters: ICharacters
	stories: IStories
	comics: IComics
	events: IEvents
	next: INext | null
	previous: IPrevious | null
}

export type IApiMovies = IMovie[]
