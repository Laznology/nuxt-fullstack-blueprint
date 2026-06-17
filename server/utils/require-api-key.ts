export const requireApiKey = defineEventHandler(async (event) => {
	const apiKey = getHeader(event, "x-api-key");
	if (!apiKey)
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
		});

	try {
		const data = await auth.api.verifyApiKey({
			body: {
				key: apiKey,
			},
		});
		if (!data) {
			throw createError({
				statusCode: 401,
				statusMessage: "Unauthorized",
			});
		}
		return data;
	} catch (error: any) {
		throw createError({
			statusCode: 500,
			statusMessage: `Unexpected error: ${error.message}`,
		});
	}
});
