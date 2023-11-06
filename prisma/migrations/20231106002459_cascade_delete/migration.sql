-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_category_id_fkey";

-- DropForeignKey
ALTER TABLE "rides" DROP CONSTRAINT "rides_user_id_fkey";

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
