export interface ITunesAppData {
	resultCount: number
	results: Array<{
		trackId: number
		trackName: string
		bundleId?: string
		version?: string
		description?: string
		screenshotUrls?: string[]
		ipadScreenshotUrls?: string[]
		trackViewUrl: string
		artworkUrl512?: string
		averageUserRating?: number
		userRatingCount?: number
		price?: number
		currency?: string
		genres?: string[]
		contentAdvisoryRating?: string
		releaseDate?: string
		currentVersionReleaseDate?: string
	}>
}

export interface ApiResponse {
	region: 'cn' | 'us'
	data: ITunesAppData
}

