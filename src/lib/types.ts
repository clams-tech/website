export type Settings = {
	language: Language
	darkmode: boolean
}

export type Doc = {
	meta: {
		title: string
		index: number
		sections: string[]
	}
	path: string
}

// locale => Display language
export enum Language {
	'en-US' = 'English (US)', // American
	'en-GB' = 'English (UK)', // British
	'zh-CN' = 'Chinese', // Mainland
	es = 'Spanish',
	hi = 'Hindi',
	ar = 'Arabic',
	bn = 'Bengali',
	fr = 'French',
	pt = 'Portuguese',
	ru = 'Russian',
	ja = 'Japanese',
	id = 'Indonesian',
	de = 'German',
	te = 'Telugu',
	tr = 'Turkish',
	ta = 'Tamil',
	ko = 'Korean'
}
