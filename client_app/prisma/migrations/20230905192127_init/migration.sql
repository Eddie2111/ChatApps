/*
  Warnings:

  - Added the required column `userId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Posts` ADD COLUMN `userId` VARCHAR(255) NOT NULL;
