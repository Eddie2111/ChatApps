/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `image`,
    ADD COLUMN `coverImage` VARCHAR(255) NULL,
    ADD COLUMN `profileImage` VARCHAR(255) NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;
