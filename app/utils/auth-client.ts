import { apiKeyClient } from "@better-auth/api-key/client";
import {
	adminClient,
	anonymousClient,
	jwtClient,
	usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/vue";
import { auditLogClient } from "better-auth-audit-logs/client";
export const authClient = createAuthClient({
	plugins: [
		apiKeyClient(),
		adminClient(),
		usernameClient(),
		anonymousClient(),
		jwtClient(),
		auditLogClient(),
	],
});
export const { signIn, signUp, signOut, useSession } = authClient;
