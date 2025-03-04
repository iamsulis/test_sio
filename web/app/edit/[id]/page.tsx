// 'use client'; untuk memastikan ini adalah Client Component
'use client';

import { useParams } from 'next/navigation';  // Menggunakan useParams dari next/navigation
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ArticleEditLayout from "@/components/Layouts/Article/ArticleEditLayout";
import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Article Edit",
//     description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function ArticleEditPage() {
    // Mengambil ID artikel menggunakan useParams()
    const { id } = useParams();  // id akan tersedia jika rute dinamis sudah dikonfigurasi dengan benar

    if (!id) {
        return <p>Loading...</p>;  // Menampilkan loading jika ID artikel belum tersedia
    }

    return (
        <>
            <DefaultLayout>
                {/* Mengirimkan ID artikel ke komponen ArticleEditLayout */}
                <ArticleEditLayout articleId={id} />
            </DefaultLayout>
        </>
    );
}
