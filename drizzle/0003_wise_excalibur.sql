ALTER TABLE "users" RENAME COLUMN "email_id" TO "email";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_email_id_key";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_key" UNIQUE("email");