// Vercel Serverless Function (Node.js compatible)
export default function handler(req: any, res: any) {
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

		// 从 Vercel 请求头中获取地理位置信息
		const country = req.headers['x-vercel-ip-country'] || req.headers['cf-ipcountry'] || null
		const city = req.headers['x-vercel-ip-city'] || null
		const region = req.headers['x-vercel-ip-country-region'] || null
		const timezone = req.headers['x-vercel-ip-timezone'] || null

		// 返回地理位置信息
		return res.status(200).json({
			country: country || 'unknown',
			city: city || 'unknown',
			region: region || 'unknown',
			timezone: timezone || 'unknown',
			// 添加一些调试信息
			headers: {
				'x-vercel-ip-country': req.headers['x-vercel-ip-country'],
				'x-vercel-ip-city': req.headers['x-vercel-ip-city'],
				'x-vercel-ip-country-region': req.headers['x-vercel-ip-country-region'],
				'x-vercel-ip-timezone': req.headers['x-vercel-ip-timezone'],
				'cf-ipcountry': req.headers['cf-ipcountry'], // Cloudflare 备用
				'x-forwarded-for': req.headers['x-forwarded-for'],
			}
		})
	} catch (error: any) {
		console.error('Geo API error:', error)
		return res.status(500).json({ 
			error: error?.message || 'Internal Server Error',
			country: 'unknown'
		})
	}
}
