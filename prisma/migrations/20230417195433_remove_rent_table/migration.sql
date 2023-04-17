-- CreateTable
CREATE TABLE "movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "available" BOOLEAN NOT NULL
);
