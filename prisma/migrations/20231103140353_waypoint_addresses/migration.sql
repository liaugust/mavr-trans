/*
  Warnings:

  - You are about to drop the column `address` on the `waypoints` table. All the data in the column will be lost.
  - Added the required column `full_address` to the `waypoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_address` to the `waypoints` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "waypoints" DROP COLUMN "address",
ADD COLUMN     "full_address" VARCHAR(255) NOT NULL,
ADD COLUMN     "short_address" VARCHAR(255) NOT NULL;
