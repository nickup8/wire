import { PropsWithChildren } from "react";

export default function TheadTable({ children }: PropsWithChildren) {
    return <thead className="">{children}</thead>;
}
