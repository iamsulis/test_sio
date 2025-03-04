import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
    return (
        <>
            <nav className="bg-white sticky top-0 ml-[15.6em]">
                <div className="px-8 py-4 flex items-center">
                    <h3 className="text-2xl grow">Article</h3>
                    <ul className="flex gap-[4em] items-center">
                        <div className="flex gap-7">
                            {/* <li>ABC</li> */}
                            <li>
                                <FaBell className="w-6 h-6" />
                            </li>
                        </div>
                        <li className="flex items-center gap-2 cursor-pointer">
                            <button className="w-10 h-10 rounded-full bg-green-200 text-green-800">
                                S
                            </button>

                            <IoIosArrowDown />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;