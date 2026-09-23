import {
  date,
  foreignKey,
  pgTable,
  time,
  unique,
  varchar,
} from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";

export const userSchema = pgTable("users", {
  userId: varchar("user_id", { length: 40 }).primaryKey().notNull(),
  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
}, (table) => [
  unique("users_email_key").on(table.email),
]);

export const daySchema = pgTable("days", {
  dayId: varchar("day_id", { length: 40 }).primaryKey().notNull(),
  date: date("date").notNull(),
  startTime: varchar("start_time", { length: 8 }).notNull(),
  endTime: varchar("end_time", { length: 8 }).notNull(),
  userId: varchar("user_id", { length: 40 }),
}, (table) => [
  foreignKey({
    columns: [table.userId],
    foreignColumns: [userSchema.userId],
    name: "days_user_id_fkey",
  }),
]);

export const eventSchema = pgTable("events", {
  eventId: varchar("event_id", { length: 40 }).primaryKey().notNull(),
  startTime: time("start_time").notNull(),
  endTime: time("end_time").notNull(),
  title: varchar({ length: 30 }),
  description: varchar({ length: 150 }),
  color: varchar({ length: 20 }),
  dayId: varchar("day_id", { length: 40 }),
}, (table) => [
  foreignKey({
    columns: [table.dayId],
    foreignColumns: [daySchema.dayId],
    name: "events_day_id_fkey",
  }),
]);
export type DBUser = InferInsertModel<typeof userSchema>;

// Inferred type for inserting a new Day record
export type DBDay = InferInsertModel<typeof daySchema>;

// Inferred type for inserting a new Event record
export type DBEvent = InferInsertModel<typeof eventSchema>;
