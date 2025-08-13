// Edge Runtime (native ESM) to avoid CJS/ESM conflicts on Vercel
export const config = { runtime: 'edge' } as const

export default async function handler(req: Request): Promise<Response> {
	try {
		const corsHeaders = new Headers({
			'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Content-Type': 'application/json; charset=utf-8',
		})

		// Handle CORS preflight
		if (req.method === 'OPTIONS') {
			return new Response(null, { status: 200, headers: corsHeaders })
		}

		// Read geo headers from Vercel/CF
		const headers = req.headers
		const country = headers.get('x-vercel-ip-country') || headers.get('cf-ipcountry') || null
		const city = headers.get('x-vercel-ip-city') || null
		const region = headers.get('x-vercel-ip-country-region') || null
		const timezone = headers.get('x-vercel-ip-timezone') || null

		const body = JSON.stringify({
			country: country || 'unknown',
			city: city || 'unknown',
			region: region || 'unknown',
			timezone: timezone || 'unknown',
			headers: {
				'x-vercel-ip-country': headers.get('x-vercel-ip-country'),
				'x-vercel-ip-city': headers.get('x-vercel-ip-city'),
				'x-vercel-ip-country-region': headers.get('x-vercel-ip-country-region'),
				'x-vercel-ip-timezone': headers.get('x-vercel-ip-timezone'),
				'cf-ipcountry': headers.get('cf-ipcountry'),
				'x-forwarded-for': headers.get('x-forwarded-for'),
			}
		})

		return new Response(body, { status: 200, headers: corsHeaders })
	} catch (error: any) {
		const errBody = JSON.stringify({
			error: error?.message || 'Internal Server Error',
			country: 'unknown',
		})
		return new Response(errBody, {
			status: 500,
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
		})
	}
}
