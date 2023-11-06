/*
  Warnings:

  - Added the required column `active` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrival_date` to the `rides` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure_date` to the `rides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "rides" ADD COLUMN     "arrival_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "departure_date" TIMESTAMP(3) NOT NULL;
