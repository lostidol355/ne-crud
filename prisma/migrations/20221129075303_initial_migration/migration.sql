-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `phoneNumber` INTEGER NULL,
    `address` VARCHAR(30) NOT NULL,
    `marks` INTEGER NOT NULL,

    UNIQUE INDEX `students_phoneNumber_key`(`phoneNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
