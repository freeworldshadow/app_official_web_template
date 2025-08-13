import type { ApiResponse, ITunesAppData } from './types'

const ITUNES_API = {
	cn: (appId: string) => `https://itunes.apple.com/cn/lookup?id=${appId}`,
	us: (appId: string) => `https://itunes.apple.com/us/lookup?id=${appId}`,
}

/**
 * 检测用户地理位置，判断是否来自中国
 * 使用多种方法进行检测：时区、语言等
 */
export function detectRegion(): 'cn' | 'us' {
	if (typeof window !== 'undefined') {
		// 1. 检查时区是否为中国时区
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
		if (timezone && (
			timezone.includes('Shanghai') || 
			timezone.includes('Beijing') ||
			timezone.includes('Asia/Shanghai') ||
			timezone.includes('Asia/Chongqing') ||
			timezone.includes('Asia/Harbin') ||
			timezone.includes('Asia/Urumqi')
		)) {
			return 'cn'
		}
		
		// 2. 检查浏览器语言偏好
		const lang = navigator.language || (navigator as any).userLanguage
		if (lang && (lang.startsWith('zh') || lang.includes('CN'))) {
			return 'cn'
		}

		// 3. 检查所有语言偏好
		if (navigator.languages) {
			for (const language of navigator.languages) {
				if (language.startsWith('zh') || language.includes('CN')) {
					return 'cn'
				}
			}
		}

		// 4. 通过时间偏移量粗略判断（中国标准时间 UTC+8）
		const timezoneOffset = new Date().getTimezoneOffset()
		if (timezoneOffset === -480) { // UTC+8
			return 'cn'
		}
	}
	
	// 默认使用美国区
	return 'us'
}

/**
 * 异步检测用户地理位置（通过服务端API）
 * 在生产环境中，这个函数会调用服务端API来获取Vercel提供的地理位置信息
 */
export async function detectRegionAsync(): Promise<'cn' | 'us'> {
	try {
		// 尝试调用地理位置检测API
		const response = await fetch('/api/geo', { 
			method: 'GET',
			cache: 'no-cache'
		})
		
		if (response.ok) {
			const data = await response.json()
			// 如果检测到中国相关的国家代码
			if (data.country === 'CN' || data.country === 'HK' || data.country === 'TW' || data.country === 'MO') {
				return 'cn'
			}
		}
	} catch (error) {
		// 如果API调用失败，回退到客户端检测
		console.log('Geo API not available, using client-side detection')
	}
	
	// 回退到客户端检测
	return detectRegion()
}

/**
 * 直接从 iTunes API 获取应用数据
 */
export async function fetchAppData(appId: string, region?: 'cn' | 'us'): Promise<ApiResponse> {
	// 如果没有指定 region，自动检测
	const targetRegion = region || detectRegion()
	
	try {
		// 首先尝试指定的区域
		const url = ITUNES_API[targetRegion](appId)
		const response = await fetch(url)
		
		if (!response.ok) {
			throw new Error(`iTunes API error: ${response.status}`)
		}
		
		const data: ITunesAppData = await response.json()
		
		// 如果找到了应用，返回数据
		if (data.resultCount > 0) {
			return { region: targetRegion, data }
		}
		
		// 如果在当前区域没找到，尝试另一个区域
		const fallbackRegion = targetRegion === 'cn' ? 'us' : 'cn'
		const fallbackUrl = ITUNES_API[fallbackRegion](appId)
		const fallbackResponse = await fetch(fallbackUrl)
		
		if (!fallbackResponse.ok) {
			throw new Error(`iTunes API error: ${fallbackResponse.status}`)
		}
		
		const fallbackData: ITunesAppData = await fallbackResponse.json()
		
		if (fallbackData.resultCount > 0) {
			return { region: fallbackRegion, data: fallbackData }
		}
		
		// 两个区域都没找到
		throw new Error('App not found in any region')
		
	} catch (error) {
		// 如果是 CORS 错误，提供更友好的错误信息
		if (error instanceof TypeError && error.message.includes('fetch')) {
			throw new Error('无法连接到 App Store API，请检查网络连接')
		}
		throw error
	}
}

