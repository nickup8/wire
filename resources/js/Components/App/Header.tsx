import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";

function Header({
    show,
    setShow,
}: {
    show: boolean;
    setShow: (show: boolean) => void;
}) {
    const menu = useRef(null);

    return (
        <header className="fixed z-50 h-15 flex w-full items-center bg-white shadow-sm px-6 justify-between">
            <div>
                <button
                    className="p-2 hover:bg-gray-100 rounded-full transition duration-250 ease-in-out hover:cursor-pointer active:bg-gray-200"
                    onClick={() => setShow(!show)}
                    ref={menu}
                >
                    <Bars3Icon className="w-6 h-6" />
                </button>
            </div>
            <div>123</div>
        </header>
    );
}

export default Header;
