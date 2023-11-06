/*
  Warnings:

  - Added the required column `car_name` to the `rides` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('confirmed', 'pending');

-- DropForeignKey
ALTER TABLE "rides" DROP CONSTRAINT "rides_car_id_fkey";

-- AlterTable
ALTER TABLE "rides" ADD COLUMN     "car_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending',
ALTER COLUMN "car_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE CASCADE;
