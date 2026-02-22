-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('IN_PROGRESS', 'READ', 'WISHLIST');

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "imageUrl" TEXT DEFAULT '',
    "status" "BookStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
