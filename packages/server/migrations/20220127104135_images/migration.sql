-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "imageSource" DROP NOT NULL,
ALTER COLUMN "imageSource" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "imageSource_filesize" INTEGER,
    "imageSource_extension" TEXT,
    "imageSource_width" INTEGER,
    "imageSource_height" INTEGER,
    "imageSource_mode" TEXT,
    "imageSource_id" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_imageSource_idx" ON "Post"("imageSource");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_imageSource_fkey" FOREIGN KEY ("imageSource") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
