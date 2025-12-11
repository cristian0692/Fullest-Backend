import { relations } from "drizzle-orm/relations";
import { userSchema as users, daySchema as days, eventSchema as events } from "./schema.ts";

export const daysRelations = relations(days, ({one, many}) => ({
	user: one(users, {
		fields: [days.userId],
		references: [users.userId]
	}),
	events: many(events),
}));

export const usersRelations = relations(users, ({many}) => ({
	days: many(days),
}));

export const eventsRelations = relations(events, ({one}) => ({
	day: one(days, {
		fields: [events.dayId],
		references: [days.dayId]
	}),
}));