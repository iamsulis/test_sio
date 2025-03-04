// import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import ArticleHomeLayout from "@/components/Layouts/Article/ArticleHomeLayout";

export const metadata: Metadata = {
	title: "Home Dashboard",
	description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
	return (
		<>
			<DefaultLayout>
				<ArticleHomeLayout />
			</DefaultLayout>
		</>
	);
}
