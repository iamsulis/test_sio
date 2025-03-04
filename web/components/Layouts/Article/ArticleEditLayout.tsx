'use client';

import { useState, useEffect } from "react";

interface DataArticle {
    title: string;
    content: string;
}

interface ArticleEditProps {
    articleId: number;  // ID artikel yang akan diupdate
}

const ArticleEditLayout: React.FC<ArticleEditProps> = ({ articleId }) => {
    // State untuk menyimpan data inputan
    const [formData, setFormData] = useState<DataArticle>({
        title: '',
        content: ''
    });

    // State untuk menangani status loading atau error
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch data artikel untuk diedit
    useEffect(() => {
        const fetchArticleData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api-trials.x5.com.au/api/articles/${articleId}`);
                console.log('API Response Status:', response.status);  // Log status response
                if (!response.ok) {
                    throw new Error(`Gagal mengambil data artikel, status code: ${response.status}`);
                }

                const data = await response.json();
                console.log('Data artikel:', data);  // Log data yang diterima dari API

                // Memastikan data ada sebelum mencoba mengakses properti
                if (data) {
                    setFormData({
                        title: data.data.title,
                        content: data.data.content,
                    });
                } else {
                    throw new Error('Data artikel tidak lengkap');
                }
            } catch (err) {
                console.error('Error fetching article data:', err);  // Log error
                setError('Terjadi kesalahan saat mengambil data artikel');
            } finally {
                setLoading(false);
            }
        };

        fetchArticleData();
    }, [articleId]);

    // Menangani perubahan input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Menangani submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Mengirim data ke server dengan metode PUT untuk update
            const response = await fetch(`https://api-trials.x5.com.au/api/articles/${articleId}`, {
                method: 'PUT', // Menggunakan PUT untuk update data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Gagal mengupdate artikel');
            }

            alert('Artikel berhasil diperbarui!');
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            setError('Terjadi kesalahan saat mengupdate artikel');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-white w-full rounded">
                <div className="p-4 grid gap-5">
                    <div className="border-b border-gray-300 py-3">
                        <h5 className="text-2xl">Edit Artikel</h5>
                    </div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <label>Title</label>
                                    <input
                                        name="title"
                                        type="text"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-[50%] bg-gray-200 py-2 px-3"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label>Content</label>
                                    <textarea
                                        name="content"
                                        rows={8}
                                        value={formData.content}
                                        onChange={handleChange}
                                        className="bg-gray-200 px-3 py-2"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="cursor-pointer bg-green-700 px-8 py-2 text-white rounded-md"
                                        disabled={loading}
                                    >
                                        {loading ? 'Saving...' : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default ArticleEditLayout;
