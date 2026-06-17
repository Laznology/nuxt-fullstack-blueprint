export default defineEventHandler({
	onRequest: [requireAdmin],
	handler: async (event) => {
		const user = event.context.auth?.user;
		return {
			success: true,
			message: "Access granted.",
			secretData: [1, 2, 3, 4, 5],
			adminName: user?.name,
		};
	},
});
