import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

function MenuItem({
    href,
    icon,
    label,
    active,
    activeIcon,
    ...props
}: {
    href: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    label: string;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            disabled
            className={
                "text-gray-700 p-2 flex items-center space-x-2 hover:bg-gray-100 rounded transition-[background, margin] duration-250 ease-in-out hover:cursor-pointer active:bg-gray-200  " +
                (active
                    ? "font-bold text-white bg-gray-900 hover:bg-gray-900 ml-0 "
                    : "hover:ml-2")
            }
        >
            <span className="w-6 h-6">{active ? activeIcon : icon}</span>
            <span>{label}</span>
        </Link>
    );
}

export default MenuItem;
