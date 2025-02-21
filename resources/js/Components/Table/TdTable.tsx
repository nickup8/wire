import { PropsWithChildren } from "react";

export default function TdTable({ children }: PropsWithChildren) {
    return <td className="border border-gray-400 text-center">{children}</td>;
}
