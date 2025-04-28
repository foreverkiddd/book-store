export interface Book {
  id: number;
  title: string;
  img: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
  categoryId: number;
  categoryName: string;
}

export interface BookDetail extends Book {
  liked: boolean;
}

export interface BookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type BookReviewItemWrite = Pick<BookReviewItem, "content" | "score">;
