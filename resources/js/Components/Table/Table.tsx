import { PropsWithChildren } from "react";

export default function Table({
    children,
    className,
}: { className?: string } & PropsWithChildren) {
    return (
        <table
            className={"border-collapse border border-gray-400 " + className}
        >
            {children}
        </table>
    );
}
