/*
  Warnings:

  - You are about to drop the column `available` on the `movie` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `movie` table. All the data in the column will be lost.
  - Added the required column `category` to the `movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL
);
INSERT INTO "new_movie" ("id", "name") SELECT "id", "name" FROM "movie";
DROP TABLE "movie";
ALTER TABLE "new_movie" RENAME TO "movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
