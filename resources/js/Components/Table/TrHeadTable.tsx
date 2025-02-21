import { PropsWithChildren } from "react";

export default function TrHeadTable({ children }: PropsWithChildren) {
    return <tr className="bg-gray-900 text-white">{children}</tr>;
}
