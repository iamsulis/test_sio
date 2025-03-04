import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Menu from "@/components/Menu";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="mt-6 ml-[17.5em]">
                <div className="grid gap-8 pe-8 pb-8">
                    <Menu />
                    {children}
                </div>
            </div>
        </>
    )
};