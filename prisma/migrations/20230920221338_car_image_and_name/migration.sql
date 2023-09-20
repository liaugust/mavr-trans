/*
  Warnings:

  - Added the required column `image` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "image" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" VARCHAR(50) NOT NULL;
