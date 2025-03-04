// import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import ArticleAddLayout from "@/components/Layouts/Article/ArticleAddLayout";

export const metadata: Metadata = {
	title: "Article Add",
	description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
	return (
		<>
			<DefaultLayout>
				<ArticleAddLayout />
			</DefaultLayout>
		</>
	);
}
