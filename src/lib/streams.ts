import { BehaviorSubject, skip } from 'rxjs'
import type { Settings } from './types'
import { getSettings, SETTINGS_STORAGE_KEY } from './utils'

export const settings$ = new BehaviorSubject<Settings>(getSettings())

// update settings in storage
settings$
	.pipe(skip(1))
	.subscribe((update) => localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(update)))

// handle dark mode toggle
settings$.subscribe(({ darkmode }) => {
	document.documentElement.classList[darkmode ? 'add' : 'remove']('dark')
})
