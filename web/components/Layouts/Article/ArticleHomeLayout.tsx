'use client';

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

interface DataArticle {
    id: number;
    date: Date;
    title: string;
    content: string;
}

const ArticleHomeLayout: React.FC = () => {

    const [dataArticle, setDataArticle] = useState<DataArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [articleToDelete, setArticleToDelete] = useState<DataArticle | null>(null);

    useEffect(() => {
        const getDataArticle = async () => {
            try {
                let url = 'https://api-trials.x5.com.au/api/articles';
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                const article = data.data.articles;
                setDataArticle(article);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDataArticle();
    }, []);

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setShowModal(false);
        setArticleToDelete(null);
    };

    // Fungsi untuk menghapus artikel
    const deleteArticle = async () => {
        if (articleToDelete) {
            try {
                const res = await fetch(`https://api-trials.x5.com.au/api/articles/${articleToDelete.id}`, {
                    method: 'DELETE',
                });
                if (res.ok) {
                    setDataArticle(dataArticle.filter(article => article.id !== articleToDelete.id));
                    closeModal();
                    alert('Artikel berhasil dihapus');
                } else {
                    alert('Gagal menghapus artikel');
                }
            } catch (error) {
                console.error('Error deleting article:', error);
            }
        }
    };

    return (
        <>
            <div className="bg-white w-full rounded">
                <div className="py-4 px-4">
                    <div className="grid gap-6">
                        <div className="flex items-center gap-4">
                            <div className="grow">
                                <div className="bg-gray-100 py-1 px-3 flex items-center gap-3">
                                    <FaSearch className="w-4 h-4" />
                                    <input type="text" className="py-1 w-full" placeholder="Type here to search" />
                                </div>
                            </div>

                            <div>
                                <a href="/new">
                                    <button className="cursor-pointer bg-green-600 text-white py-2 px-4 rounded-lg">Add</button>
                                </a>
                            </div>
                        </div>

                        <div>
                            <table className="w-full border-collapse border border-gray-400">
                                <thead>
                                    <tr className="bg-green-100">
                                        <th className="py-3 border-collapse border border-gray-400">No</th>
                                        <th className="py-3 border-collapse border border-gray-400">Date</th>
                                        <th className="py-3 border-collapse border border-gray-400">Title</th>
                                        <th className="py-3 border-collapse border border-gray-400">Content</th>
                                        <th className="py-3 border-collapse border border-gray-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        dataArticle.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="w-[20%] py-3 border-collapse border border-gray-400">{index + 1}</td>
                                                    <td className="w-[20%] py-3 border-collapse border border-gray-400">
                                                        {/* {new Date(value.date).toISOString().split('T')[0]} */}
                                                    </td>
                                                    <td className="w-[20%] py-3 border-collapse border border-gray-400">{value.title}</td>
                                                    <td className="w-1 py-3 border-collapse border border-gray-400 truncate">{value.content}</td>
                                                    <td className="w-[20%] py-3 border-collapse border border-gray-400">
                                                        <div className="flex gap-2 w-full justify-center">
                                                            <a href={"/edit/" + value.id}>
                                                                <button className="cursor-pointer bg-yellow-600 p-3 rounded-full text-white">
                                                                    <BsPencilSquare />
                                                                </button>
                                                            </a>

                                                            <button
                                                                className="cursor-pointer bg-red-600 p-3 rounded-full text-white"
                                                                onClick={() => {
                                                                    setArticleToDelete(value); // Set artikel yang akan dihapus
                                                                    setShowModal(true); // Tampilkan modal
                                                                }}
                                                            >
                                                                <BsFillTrashFill />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && articleToDelete && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h3 className="text-xl mb-4">Konfirmasi Penghapusan</h3>
                        <p>Apakah Anda yakin ingin menghapus artikel: <strong>{articleToDelete.title}</strong>?</p>
                        <div className="mt-4 flex justify-end gap-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-lg"
                                onClick={closeModal}
                            >
                                Batal
                            </button>
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                onClick={deleteArticle}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ArticleHomeLayout;
