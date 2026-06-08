import { db } from "@nuxthub/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
	/** other drizzle config can see at https://better-auth.com/docs/adapters/drizzle */
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [admin()],
	usePlural: true,
});
