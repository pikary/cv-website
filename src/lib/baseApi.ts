const API_URL = '/api';

interface Config {
	headers?: Record<string, string>;
	[key: string]: any;
}

const baseRequest = async <ReturnType>(
	method: string,
	url: string,
	body: any = null,
	config: Config = {}
): Promise<ReturnType | undefined> => {
	try {
		const req = await fetch(`${API_URL}/${url}`, {
			method,
			body: body ? JSON.stringify(body) : null,
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('access_token') || '',
				...config.headers,
			},
			...config,
		});
		const result = await req.json();

		if (!req.ok) {
			throw new Error(
				result.message + req.status || 'Request Failed ' + req.status
			);
		}
		return result as ReturnType;
	} catch (e) {
		// Handle the error appropriately
		// For example, you can log it or throw a custom error
		console.error('Error in baseRequest:', e);
		throw new Error(
			'Something went wrong, please review your server connection'
		);
	}
};

export default baseRequest;
