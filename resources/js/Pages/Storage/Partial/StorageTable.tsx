import Table from "@/Components/Table/Table";
import TheadTable from "@/Components/Table/TheadTable";
import ThTable from "@/Components/Table/ThTable";
import TrHeadTable from "@/Components/Table/TrHeadTable";

export default function StorageTable({ className }: { className?: string }) {
    return (
        <Table
            className={
                "w-full border-collapse border border-gray-400 " + className
            }
        >
            <TheadTable>
                <TrHeadTable>
                    <ThTable>Название река</ThTable>
                    <ThTable>Зона</ThTable>
                    <ThTable>Начальный уровень</ThTable>
                    <ThTable>Количество уровней</ThTable>
                    <ThTable>Начальная ячейка</ThTable>
                    <ThTable>Конечная ячейка</ThTable>
                    <ThTable></ThTable>
                </TrHeadTable>
            </TheadTable>
        </Table>
    );
}
