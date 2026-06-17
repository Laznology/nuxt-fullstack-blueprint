import { apiKey } from "@better-auth/api-key";
import { db } from "@nuxthub/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, anonymous, jwt, openAPI, username } from "better-auth/plugins";
import { auditLog } from "better-auth-audit-logs";

export const auth = betterAuth({
	/** other drizzle config can see at https://better-auth.com/docs/adapters/drizzle */
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [
		admin(),
		apiKey(),
		username(),
		anonymous(),
		jwt(),
		auditLog(),
		openAPI(),
	],
});
