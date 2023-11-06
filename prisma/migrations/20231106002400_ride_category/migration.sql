/*
  Warnings:

  - Added the required column `category_name` to the `rides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rides" ADD COLUMN     "category_id" INTEGER,
ADD COLUMN     "category_name" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
