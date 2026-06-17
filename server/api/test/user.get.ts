export default defineEventHandler({
	onRequest: [requireAuth],
	handler: async (event) => {
		const user = event.context.auth?.user;
		return {
			success: true,
			message: `Hi ${user?.name || "User"}`,
			role: user?.role,
		};
	},
});
