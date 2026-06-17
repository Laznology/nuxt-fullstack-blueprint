export const requireAdmin = defineEventHandler(async (event) => {
	const auth = event.context.auth;

	if (!auth || !auth.user) {
		throw createError({
			statusCode: 401,
			statusMessage: "Unauthorized",
		});
	}

	if (auth.user.role !== "admin") {
		throw createError({
			statusCode: 403,
			statusMessage: "Forbidden",
		});
	}
});
