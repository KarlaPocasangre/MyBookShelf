const prisma = require("../db/prisma");

async function getAllBooks() {
  return prisma.book.findMany({ orderBy: { createdAt: "desc" } });
}

async function createBook(data) {
  return prisma.book.create({
    data: {
      title: data.title?.trim(),
      description: data.description?.trim() || "",
      imageUrl: data.imageUrl?.trim() || "",
      status: data.status || "IN_PROGRESS",
      isFavorite: Boolean(data.isFavorite),
    },
  });
}

async function getBookById(id) {
  return prisma.book.findUnique({ where: { id } });
}

async function updateBook(id, data) {
  try {
    return await prisma.book.update({
      where: { id },
      data: {
        ...(data.title !== undefined ? { title: data.title.trim() } : {}),
        ...(data.description !== undefined
          ? { description: data.description.trim() }
          : {}),
        ...(data.imageUrl !== undefined
          ? { imageUrl: data.imageUrl.trim() }
          : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.isFavorite !== undefined
          ? { isFavorite: Boolean(data.isFavorite) }
          : {}),
      },
    });
  } catch (e) {
    if (e.code === "P2025") return null;
    throw e;
  }
}

async function deleteBook(id) {
  try {
    await prisma.book.delete({ where: { id } });
    return true;
  } catch (e) {
    if (e.code === "P2025") return false;
    throw e;
  }
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
