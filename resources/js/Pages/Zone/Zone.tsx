import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
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

    const { errors: serverError } = usePage<ZoneProps>().props;

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
        router.post("/zones", data, {
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
            <div className="flex space-x-4 mt-4">
                <div>
                    <div className="p-6 bg-white rounded shadow-sm min-w-80">
                        <h2 className="text-lg font-medium ">Добавить зону</h2>
                        <form className="mt-2" onSubmit={handleSubmit(submit)}>
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
                        <table className="w-full border-collapse border border-gray-400">
                            <thead className="">
                                <tr className="bg-gray-900 text-white">
                                    <th className="py-2 border border-gray-400">
                                        Наименование зоны
                                    </th>
                                    <th className="py-2 border border-gray-400">
                                        Дата создания
                                    </th>
                                    <th className="py-2 border border-gray-400"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {zones.data.map((zone) => (
                                    <tr
                                        className="even:bg-gray-100"
                                        key={zone.id}
                                    >
                                        <td className="border border-gray-400 text-center">
                                            {zone.name}
                                        </td>
                                        <td className="border border-gray-400 text-center">
                                            {new Date(
                                                zone.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="border border-gray-400 text-center">
                                            <button
                                                className="p-2 hover:bg-gray-100 rounded-full transition duration-250 ease-in-out hover:cursor-pointer active:bg-gray-200 text-red-500"
                                                onClick={() =>
                                                    deleteZone(zone.id)
                                                }
                                            >
                                                <TrashIcon className="w-6 h-6" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
