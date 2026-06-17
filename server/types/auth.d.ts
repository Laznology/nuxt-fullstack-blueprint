import type { Session, User } from "better-auth";

declare module "h3" {
	interface H3EventContext {
		auth?: {
			user: User & {
				role?: string | null;
				banned?: boolean | null;
				banReason?: string | null;
				banExpires?: Date | null;
				username?: string | null;
				displayUsername?: string | null;
				isAnonymous?: boolean | null;
			};
			session: Session;
		};
		apiKey?: {
			id: string;
			configId: string;
			name: string | null;
			start: string | null;
			referenceId: string;
			prefix: string | null;
			key: string;
			refillInterval: number | null;
			refillAmount: number | null;
			lastRefillAt: Date | null;
			enabled: boolean | null;
			rateLimitEnabled: boolean | null;
			rateLimitTimeWindow: number | null;
			rateLimitMax: number | null;
			requestCount: number | null;
			remaining: number | null;
			lastRequest: Date | null;
			expiresAt: Date | null;
			createdAt: Date;
			updatedAt: Date;
			permissions: string | null;
			metadata: string | null;
		};
	}
}
