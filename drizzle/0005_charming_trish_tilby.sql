ALTER TABLE "events" DROP CONSTRAINT "events_day_id_fkey";
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "public"."days"("day_id") ON DELETE cascade ON UPDATE no action;