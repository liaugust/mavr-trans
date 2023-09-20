-- CreateTable
CREATE TABLE "rides" (
    "id" SERIAL NOT NULL,
    "car_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "rides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OptionToRide" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "rides_id_key" ON "rides"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_OptionToRide_AB_unique" ON "_OptionToRide"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionToRide_B_index" ON "_OptionToRide"("B");

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToRide" ADD CONSTRAINT "_OptionToRide_A_fkey" FOREIGN KEY ("A") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionToRide" ADD CONSTRAINT "_OptionToRide_B_fkey" FOREIGN KEY ("B") REFERENCES "rides"("id") ON DELETE CASCADE ON UPDATE CASCADE;
