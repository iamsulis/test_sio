import { FaAlignJustify } from "react-icons/fa";

const Menu: React.FC = () => {
    return (
        <>
            <div className="flex">
                <div className=" grid w-[25em] border-b-2 border-green-600">
                    <div className="p-3">
                        <div className="flex gap-4 items-center text-green-600">
                            <div className="">
                                <div className="border border-green-600 p-4 rounded-full">
                                    <FaAlignJustify className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="grid gap-1">
                                <h4 className="text-xl font-bold">Article</h4>
                                <h4 className="text-sm">List Article</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;