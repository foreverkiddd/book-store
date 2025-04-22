import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
    id: 1,
    title: "Dummy Book Title",
    img: 5,
    form: "paperback",
    isbn: "Dummy ISBN",
    summary: "Dummy Summary",
    detail: "Dummy Detail",
    author: "Dummy Author",
    pages: 100,
    contents: "Dummy Contents",
    price: 10000,
    likes: 1,
    pubDate: "2025-04-22",
    category_id: 1,
    category_name: "소설",
};

describe("BookItem", () => {
    it("렌더 여부", () => {
        const { getByText } = render(
            <BookStoreThemeProvider>
                <BookItem book={dummyBook} />
            </BookStoreThemeProvider>
        );

        expect(getByText(dummyBook.title)).toBeInTheDocument();
        expect(getByText(dummyBook.summary)).toBeInTheDocument();
        expect(getByText(dummyBook.author)).toBeInTheDocument();
        expect(getByText("10,000원")).toBeInTheDocument();
        expect(getByText(dummyBook.likes)).toBeInTheDocument();
        expect(getByText(dummyBook.title)).toHaveAttribute("src", `https://picsum.photos/id/${dummyBook.img}/600/600`);

    })
})