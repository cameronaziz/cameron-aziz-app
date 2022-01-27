/*
  Warnings:

  - Made the column `postDate` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "postDate" SET NOT NULL;
