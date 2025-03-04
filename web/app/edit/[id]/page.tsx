// 'use client'; untuk memastikan ini adalah Client Component
'use client';

import { useParams } from 'next/navigation';  // Menggunakan useParams dari next/navigation
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ArticleEditLayout from "@/components/Layouts/Article/ArticleEditLayout";
// import { Metadata } from "next";

export default function ArticleEditPage() {
    const { id } = useParams();

    if (!id) {
        return <p>Loading...</p>;
    }

    const articleId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

    if (isNaN(articleId)) {
        return <p>Article ID tidak valid</p>;
    }

    return (
        <>
            <DefaultLayout>
                <ArticleEditLayout articleId={articleId} />
            </DefaultLayout>
        </>
    );
}
