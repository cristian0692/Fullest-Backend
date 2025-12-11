-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "users" (
	"user_id" varchar(40) PRIMARY KEY NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email_id" varchar(100),
	CONSTRAINT "users_email_id_key" UNIQUE("email_id")
);
--> statement-breakpoint
CREATE TABLE "days" (
	"day_id" varchar(40) PRIMARY KEY NOT NULL,
	"start_time" date NOT NULL,
	"end_time" date NOT NULL,
	"user_id" varchar(40)
);
--> statement-breakpoint
CREATE TABLE "events" (
	"event_id" varchar(40) PRIMARY KEY NOT NULL,
	"start_time" time NOT NULL,
	"end_time" time NOT NULL,
	"title" varchar(30),
	"description" varchar(150),
	"color" varchar(20),
	"day_id" varchar(40)
);
--> statement-breakpoint
ALTER TABLE "days" ADD CONSTRAINT "days_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "public"."days"("day_id") ON DELETE no action ON UPDATE no action;
*/