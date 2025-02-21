import { PropsWithChildren } from "react";

export default function TrBodyTable({ children }: PropsWithChildren) {
    return <tr className="even:bg-gray-100 w-full">{children}</tr>;
}
