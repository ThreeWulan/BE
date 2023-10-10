/*
  Warnings:

  - You are about to drop the column `author` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `book` table. All the data in the column will be lost.
  - Added the required column `address` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deskription` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eMail` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sum` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `author`,
    DROP COLUMN `createdAt`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `deskription` VARCHAR(191) NOT NULL,
    ADD COLUMN `eMail` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `sum` INTEGER NOT NULL;
