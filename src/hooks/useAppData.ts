import { useEffect, useMemo, useState } from 'react'
import { fetchAppData, detectRegionAsync } from '../lib/api'
import type { ApiResponse } from '../lib/types'

export function useAppData() {
	const [data, setData] = useState<ApiResponse | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	const appId = useMemo(() => {
		// 优先从 URL 参数获取，其次从环境变量获取
		const url = new URL(window.location.href)
		const qAppId = url.searchParams.get('appId') || ''
		const envAppId = import.meta.env.VITE_APP_ID as string | undefined
		return qAppId || envAppId || ''
	}, [])

	useEffect(() => {
		let cancelled = false
		async function loadAppData() {
			try {
				setLoading(true)
				setError(null)
				
				if (!appId) {
					throw new Error('Missing App ID. Please provide ?appId= in URL parameters or configure VITE_APP_ID in .env file')
				}
				
				// 使用异步地理位置检测获取最准确的 region
				const detectedRegion = await detectRegionAsync()
				
				// 使用检测到的 region 获取数据
				const resp = await fetchAppData(appId, detectedRegion)
				if (!cancelled) {
					setData(resp)
				}
			} catch (e: any) {
				if (!cancelled) {
					setError(e?.message || 'Failed to load app data')
				}
			} finally {
				if (!cancelled) {
					setLoading(false)
				}
			}
		}
		
		loadAppData()
		
		return () => {
			cancelled = true
		}
	}, [appId])

	return { data, error, loading, appId, region: data?.region || 'us' }
}

