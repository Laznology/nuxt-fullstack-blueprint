import { db, schema } from "@nuxthub/db";

export default defineTask({
	meta: {
		name: "db:seed",
		description: "Seed database with initial data",
	},
	async run() {
		console.log("Seeding database...");

		const users = [
			{
				id: crypto.randomUUID(),
				name: "John Doe",
				email: "john@example.com",
				image: "https://i.pravatar.cc/150?img=1",
				role: "admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: crypto.randomUUID(),
				name: "Jane Doe",
				email: "jane@example.com",
				image: "https://i.pravatar.cc/150?img=2",
				role: "user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		try {
			await db.insert(schema.user).values(users);
			console.log("Users seeded successfully");
		} catch (error) {
			console.error("Error seeding users:", error);
			throw error;
		}

		return { result: "Database seeded successfully" };
	},
});
