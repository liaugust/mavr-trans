/*
  Warnings:

  - You are about to drop the column `departure_point` on the `rides` table. All the data in the column will be lost.
  - You are about to drop the column `destination_point` on the `rides` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "rides" DROP COLUMN "departure_point",
DROP COLUMN "destination_point";

-- CreateTable
CREATE TABLE "waypoints" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "ride_id" INTEGER NOT NULL,

    CONSTRAINT "waypoints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waypoints_id_key" ON "waypoints"("id");

-- AddForeignKey
ALTER TABLE "waypoints" ADD CONSTRAINT "waypoints_ride_id_fkey" FOREIGN KEY ("ride_id") REFERENCES "rides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
