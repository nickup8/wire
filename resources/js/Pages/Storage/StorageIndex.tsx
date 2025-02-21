import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Table from "@/Components/Table/Table";
import TheadTable from "@/Components/Table/TheadTable";
import ThTable from "@/Components/Table/ThTable";
import TrHeadTable from "@/Components/Table/TrHeadTable";
import LogisticLayout from "@/Layouts/LogisticLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StorageForm from "./Partial/StorageForm";
import StorageTable from "./Partial/StorageTable";

export default function StorageIndex({ zones }: any) {
    return (
        <>
            <Head title="Места хранения" />
            <h1 className="text-2xl font-bold">Места хранения</h1>
            <div className="mt-4 flex justify-between space-x-6">
                <div>
                    <div className="p-6 bg-white rounded shadow-sm w-80">
                        <h2 className="text-lg font-medium ">
                            Добавить места хранения
                        </h2>
                        <StorageForm className="mt-4" zones={zones} />
                    </div>
                </div>
                <div className="flex-1 ">
                    <div className="p-6 bg-white rounded shadow-sm">
                        <h2 className="text-lg font-medium ">
                            Список мест хранения
                        </h2>
                        <StorageTable className="mt-4" />
                    </div>
                </div>
            </div>
        </>
    );
}

StorageIndex.layout = (page: any) => <LogisticLayout>{page}</LogisticLayout>;
