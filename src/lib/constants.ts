import channels from '$lib/icons/channels'
import keys from '$lib/icons/keys.js'
import lightningOutline from '$lib/icons/lightning-outline.js'
import list from '$lib/icons/list.js'
import wallet from '$lib/icons/wallet.js'
import forward from '$lib/icons/forward.js'
import tag from '$lib/icons/tag'

export type FEATURE =
	| 'Wallets'
	| 'Payments'
	| 'UTXOs'
	| 'Channels'
	| 'Offers'
	| 'Forwards'
	| 'Metadata'

export const FEATURE_ICONS: {
	[K in FEATURE]: string
} = {
	Wallets: wallet,
	Payments: list,
	UTXOs: keys,
	Channels: channels,
	Offers: lightningOutline,
	Forwards: forward,
	Metadata: tag
}

export const REMOTE_APP_URL = 'https://remote.clams.tech/'
export const DOCS_URL = 'https://docs.clams.tech'
export const BLOG_URL = 'https://blog.clams.tech'
export const DISCORD_URL = 'https://discord.gg/eWfHuJZVaB'
export const GITHUB_URL = 'https://github.com/clams-tech'
export const CRAB_NEBULA_URL = 'https://cdn.crabnebula.app/download/clams/clams/latest/platform'
