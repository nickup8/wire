interface IColumnsSupplier {
    Header: string;
    accesor: string;
}

export const COLUMNS = [
    {
        Header: "Код поставщика",
        accesor: "supplierCode",
    },
    {
        Header: "Название поставщика",
        accesor: "supplierName",
    },
    {
        Header: "Дата создания",
        accesor: "createdAt",
    },
];
