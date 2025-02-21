import { PropsWithChildren } from "react";

export default function ThTable({ children }: PropsWithChildren) {
    return <th className="py-2 border border-gray-400">{children}</th>;
}
