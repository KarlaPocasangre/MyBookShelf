import { request } from "../api/http";

export async function getBooks() {
  const res = await request("/api/books");
  return res.data;
}

export async function getBookById(id) {
  const res = await request(`/api/books/${id}`);
  return res.data;
}

export async function createBook(payload) {
  const res = await request("/api/books", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return res.data;
}

export async function updateBook(id, payload) {
  const res = await request(`/api/books/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
  return res.data;
}

export async function deleteBook(id) {
  await request(`/api/books/${id}`, {
    method: "DELETE",
  });
}
