import Header from "@/Components/App/Header";
import Sidebar from "@/Components/App/Sidebar";
import { Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { PropsWithChildren, useState } from "react";

export default function LogisticLayout({ children }: PropsWithChildren) {
    const [show, setShow] = useState(true);

    const handlerShow = () => {
        setShow((prev) => !prev);
    };

    return (
        <div className="flex w-full overflow-hidden min-h-screen bg-gray-100">
            <Header show={show} setShow={handlerShow} />

            <Transition
                show={show}
                enter="transition-all duration-300 ease-in-out"
                enterFrom="opacity-0 -translate-x-10"
                enterTo="opacity-100 translate-x-0"
                leave="transition-all duration-300 ease-in-out"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-10"
                as="div"
            >
                <Sidebar />
            </Transition>

            <div
                className={`w-full flex-1 overflow-hidden overflow-y-auto py-20 px-16 h-full transition-[margin] duration-300 ${
                    show ? "ml-64" : "ml-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
