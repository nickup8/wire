import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Components/Table/Table";
import TrbodyTable from "@/Components/Table/TbodyTable";
import TbodyTable from "@/Components/Table/TbodyTable";
import TdTable from "@/Components/Table/TdTable";
import TheadTable from "@/Components/Table/TheadTable";
import ThTable from "@/Components/Table/ThTable";
import TrBodyTable from "@/Components/Table/TrBodyTable";
import TrHeadTable from "@/Components/Table/TrHeadTable";
import TextInput from "@/Components/TextInput";
import LogisticLayout from "@/Layouts/LogisticLayout";
import { PageProps } from "@/types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    name: string;
};

interface Zone {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface ZoneResponse {
    current_page: number;
    data: Zone[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface ZoneProps extends PageProps {
    zones: ZoneResponse;
    errors?: Record<string, string>;
}

function Zone({ zones }: ZoneProps) {
    const [isSending, setIsSending] = useState(false);
    const {
        setValue,
        register,
        setError,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm<FormData>();

    const { errors: serverError } = usePage<PageProps>().props;

    useEffect(() => {
        if (serverError) {
            Object.entries(serverError).forEach(
                ([field, message]: string[]) => {
                    setError(field as keyof FormData, {
                        type: "server",
                        message,
                    });
                }
            );
        }
    }, [serverError, setError]);

    const submit: SubmitHandler<FormData> = (data) => {
        setIsSending(true);
        const transformName = { ...data, name: `Зона ${data.name}` };
        router.post("/zones", transformName, {
            onSuccess: () => {
                reset();
                setIsSending(false);
            },
            onError: () => {
                setIsSending(false);
            },
        });
    };

    const deleteZone = (id: number) => {
        router.delete(`/zones/${id}`);
    };
    return (
        <>
            <Head title="Зоны" />
            <h1 className="text-2xl font-bold">Зоны фидинга</h1>
            <div className="flex space-x-6 mt-4">
                <div>
                    <div className="p-6 bg-white rounded shadow-sm min-w-80">
                        <h2 className="text-lg font-medium ">Добавить зону</h2>
                        <form
                            className="mt-2"
                            noValidate
                            onSubmit={handleSubmit(submit)}
                        >
                            <InputLabel htmlFor="zone">Номер зоны</InputLabel>
                            <input
                                id="zone"
                                className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                                type="number"
                                {...register("name", {
                                    required: "Номер зоны не может быть пустым",
                                })}
                            />
                            <div>
                                {errors.name && (
                                    <InputError message={errors.name.message} />
                                )}
                            </div>
                            <PrimaryButton
                                className="mt-3"
                                type="submit"
                                disabled={isSending}
                            >
                                Создать
                            </PrimaryButton>
                        </form>
                    </div>
                </div>

                <div className="flex-1 p-6 bg-white rounded shadow-sm">
                    <h2 className="mb-2 text-lg font-medium">Список зон</h2>
                    {zones.data.length > 0 ? (
                        <Table className="w-full border-collapse border border-gray-400">
                            <TheadTable>
                                <TrHeadTable>
                                    <ThTable>Наименование зоны</ThTable>
                                    <ThTable>Дата создания</ThTable>
                                    <ThTable></ThTable>
                                </TrHeadTable>
                            </TheadTable>
                            <TbodyTable>
                                {zones.data.map((zone) => (
                                    <TrBodyTable key={zone.id.toString()}>
                                        <TdTable>{zone.name}</TdTable>
                                        <TdTable>
                                            {new Date(
                                                zone.created_at
                                            ).toLocaleDateString()}
                                        </TdTable>
                                        <TdTable>
                                            <button
                                                className="p-2 hover:bg-gray-100 rounded-full transition duration-250 ease-in-out hover:cursor-pointer active:bg-gray-200 text-red-500"
                                                onClick={() =>
                                                    deleteZone(zone.id)
                                                }
                                            >
                                                <TrashIcon className="w-6 h-6" />
                                            </button>
                                        </TdTable>
                                    </TrBodyTable>
                                ))}
                            </TbodyTable>
                        </Table>
                    ) : (
                        <p>
                            Зоны еще не созданы. Создайте первую зону вашего
                            фидинга
                        </p>
                    )}
                    {zones.total > zones.per_page && (
                        <div className="mt-4 flex justify-center space-x-2">
                            {zones.links.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        link.url && router.visit(link.url)
                                    }
                                    className={`px-3 py-1 border rounded ${
                                        link.active
                                            ? "bg-gray-900 text-white"
                                            : "bg-white text-gray-900"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Zone.layout = (page: React.ReactNode) => <LogisticLayout children={page} />;

export default Zone;
