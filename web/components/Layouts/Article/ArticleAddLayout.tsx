'use client';

import { useState } from "react";

interface DataArticle {
    title: string;
    content: string;
}

const ArticleAddLayout: React.FC = () => {
    // State untuk menyimpan data inputan
    const [formData, setFormData] = useState<DataArticle>({
        title: '',
        content: ''
    });

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

        try {
            // Mengirim data ke server dengan metode POST
            const response = await fetch('https://api-trials.x5.com.au/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Gagal mengirim data');
            }

            // Jika berhasil, reset form
            setFormData({
                title: '',
                content: ''
            });

            alert('Artikel berhasil ditambahkan!');
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            alert('Terjadi kesalahan saat mengirim data');
        }
    };

    return (
        <>
            <div className="bg-white w-full rounded">
                <div className="p-4 grid gap-5">
                    <div className="border-b border-gray-300 py-3">
                        <h5 className="text-2xl">Add</h5>
                    </div>

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
                                <button type="submit" className="cursor-pointer bg-green-700 px-8 py-2 text-white rounded-md">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ArticleAddLayout;
