-- CreateTable
CREATE TABLE `myForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `eMail` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `sum` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
