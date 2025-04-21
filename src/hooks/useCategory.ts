import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategory()
            .then((category) => {
                if (!category) return;

                const categoryWithAll = [
                    { id: null, name: "전체" },
                    ...category,
                ];

                setCategory(categoryWithAll);
            })
            .catch((error) => {
                console.error("Failed to fetch categories:", error);
                alert("카테고리를 불러오는 데 실패했습니다.");
                setCategory([
                    { id: null, name: "전체" },
                    { id: 0, name: "동화" },
                    { id: 1, name: "소설" },
                    { id: 2, name: "사회" },
                ]);
            });
    }, []);

    return { category };
}