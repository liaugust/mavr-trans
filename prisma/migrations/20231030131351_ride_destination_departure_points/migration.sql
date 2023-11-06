/*
  Warnings:

  - Added the required column `departure_point` to the `rides` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination_point` to the `rides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rides" ADD COLUMN     "departure_point" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destination_point" DOUBLE PRECISION NOT NULL;
