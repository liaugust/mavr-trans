/*
  Warnings:

  - You are about to drop the column `arrival_date` on the `rides` table. All the data in the column will be lost.
  - You are about to drop the column `departure_date` on the `rides` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "rides" DROP COLUMN "arrival_date",
DROP COLUMN "departure_date";
