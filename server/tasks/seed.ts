import { db, schema } from "@nuxthub/db";

export default defineTask({
	meta: {
		name: "db:seed",
		description: "Seed database with users and API keys based on exact schema",
	},
	async run() {
		console.log("Seeding database...");

		const now = new Date();

		const adminId = crypto.randomUUID();
		const userId = crypto.randomUUID();

		const adminKeyString = `sk_admin_${crypto.randomUUID().replace(/-/g, "")}`;
		const userKeyString = `sk_user_${crypto.randomUUID().replace(/-/g, "")}`;

		const users = [
			{
				id: adminId,
				name: "John Admin",
				email: "admin@example.com",
				role: "admin",
				emailVerified: true,
				createdAt: now,
				updatedAt: now,
			},
			{
				id: userId,
				name: "Jane User",
				email: "user@example.com",
				role: "user",
				emailVerified: true,
				createdAt: now,
				updatedAt: now,
			},
		];

		const apiKeys = [
			{
				id: crypto.randomUUID(),
				configId: "default",
				name: "Admin Master Key",
				referenceId: adminId,
				key: adminKeyString,
				createdAt: now,
				updatedAt: now,
				enabled: true,
			},
			{
				id: crypto.randomUUID(),
				configId: "default",
				name: "Default User Key",
				referenceId: userId,
				key: userKeyString,
				createdAt: now,
				updatedAt: now,
				enabled: true,
			},
		];

		try {
			await db
				.insert(schema.user)
				.values(users)
				.onConflictDoNothing({ target: schema.user.email });

			console.log("Users seeded successfully.");

			await db
				.insert(schema.apiKey)
				.values(apiKeys)
				.onConflictDoNothing({ target: schema.apiKey.id });

			console.log("API Keys seeded successfully.");

			console.log("\nGenerated Keys:");
			console.log(`Admin (John): ${adminKeyString}`);
			console.log(`User (Jane):  ${userKeyString}\n`);
		} catch (error) {
			console.error("Error seeding database:", error);
			throw error;
		}

		return { result: "Database seeded successfully" };
	},
});
