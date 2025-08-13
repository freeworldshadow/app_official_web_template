// iTunes API 代理 - 解决 CORS 问题
export default async function handler(req: any, res: any) {
	try {
		// 设置 CORS 头
		res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

		// 处理 OPTIONS 请求
		if (req.method === 'OPTIONS') {
			return res.status(200).end()
		}

		// 只允许 GET 请求
		if (req.method !== 'GET') {
			return res.status(405).json({ error: 'Method not allowed' })
		}

		// 获取查询参数
		const { id, region = 'us' } = req.query

		// 验证参数
		if (!id) {
			return res.status(400).json({ error: 'App ID is required' })
		}

		if (!['cn', 'us'].includes(region)) {
			return res.status(400).json({ error: 'Region must be cn or us' })
		}

		// 构建 iTunes API URL
		const itunesUrl = `https://itunes.apple.com/${region}/lookup?id=${id}`

		// 请求 iTunes API
		const response = await fetch(itunesUrl, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; App Official Website/1.0)',
				'Accept': 'application/json',
			},
		})

		if (!response.ok) {
			throw new Error(`iTunes API error: ${response.status} ${response.statusText}`)
		}

		const data = await response.json()

		// 返回数据
		return res.status(200).json({
			region,
			data,
			// 添加一些元数据
			meta: {
				requestTime: new Date().toISOString(),
				source: 'iTunes API Proxy',
				originalUrl: itunesUrl,
			}
		})

	} catch (error: any) {
		console.error('iTunes API Proxy error:', error)
		
		// 根据错误类型返回不同的状态码
		if (error.message.includes('fetch')) {
			return res.status(503).json({ 
				error: 'Unable to connect to iTunes API',
				details: error.message,
			})
		}

		return res.status(500).json({ 
			error: error?.message || 'Internal Server Error',
		})
	}
}
