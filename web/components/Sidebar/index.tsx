import { FaNewspaper } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

const Sidebar: React.FC = () => {
    return (
        <>
            <aside className="fixed top-0 h-[100%] bg-white w-[250] border-r border-[#d7d7d7]">
                <div className="px-[1.5em] pt-[2em] grid gap-8">
                    <div>
                        <button className="bg-green-200 text-green-800 p-3 rounded-full">
                            <FaAlignJustify />
                        </button>
                    </div>

                    <div>
                        <h5 className="text-3xl">Logo</h5>
                    </div>

                    <div>
                        <ul>
                            <a href="/">
                                <li className="flex gap-5 items-center bg-green-50 px-4 py-3 text-green-800 rounded-l-sm border-l-5">
                                    <FaNewspaper className="h-[1.5em] w-[1.5em]" />
                                    Article
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>
            </aside>
        </>
    );
}

export default Sidebar;