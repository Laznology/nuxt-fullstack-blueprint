import { db, schema } from "@nuxthub/db";

export default defineTask({
  meta: {
    description: "Seed database with initial data",
    name: "db:seed",
  },
  async run() {
    console.log("Seeding database...");

    const users = [
      {
        createdAt: new Date(),
        email: "john@example.com",
        id: crypto.randomUUID(),
        image: "https://i.pravatar.cc/150?img=1",
        name: "John Doe",
        role: "admin",
        updatedAt: new Date(),
      },
      {
        createdAt: new Date(),
        email: "jane@example.com",
        id: crypto.randomUUID(),
        image: "https://i.pravatar.cc/150?img=2",
        name: "Jane Doe",
        role: "user",
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
