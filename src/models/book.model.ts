export interface Book {
    id:number;
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
    category_id: number;
    category_name: string;
}

export interface BookDetail extends Book {
    liked: boolean;
}