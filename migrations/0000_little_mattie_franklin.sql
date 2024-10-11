CREATE TABLE `location` (
	`id` integer PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	`latitude` real NOT NULL,
	`longitude` real NOT NULL,
	`city` text,
	`region` text,
	`region_code` text,
	`country` text,
	`hash` text NOT NULL,
	`count` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `lat_long_index` ON `location` (`latitude`,`longitude`);