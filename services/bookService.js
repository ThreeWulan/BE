// const { prisma } = require("../config/prisma");

// async function getAllBooks() {
//   try {
//     const books = await prisma.findMany();

//     return books;
//   } catch (error) {
//     console.error(error);

//     throw new Error();
//   }
// }

// async function createBook() {
//   try {
//     const mappedBook = {
//       data: {
//         nama: book.nama,
//         email: book.email,
//         judul_buku: book.judul_buku,
//         jumlah: book.jumlah,
//         alamat: book.alamat,
//         deskripsi: book.deskripsi,
//       },
//     };
//     const createdBook = await prisma.create(mappedBook);

//     return createdBook;
//   } catch (error) {
//     console.error(error);

//     throw new Error();
//   }
// }

// module.exports = {
//   getAllBooks,
//   createBook,
// };
