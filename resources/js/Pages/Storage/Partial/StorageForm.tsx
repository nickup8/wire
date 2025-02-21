import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { PageProps } from "@/types";
import { Select } from "@headlessui/react";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface FormData {
    name: string;
    zone: number;
    start_level: number;
    level_count: number;
    start_storage: number;
    finish_storage: number;
}

export default function StorageForm({
    className,
    zones,
}: {
    className?: string;
    zones: any;
}) {
    const [isSending, setIsSending] = useState(false);
    const {
        register,
        setError,
        handleSubmit,
        reset,
        watch,
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
        console.log(data);
        console.log(startStorage);
    };

    const resetForm = () => {
        reset();
    };

    const startStorage = watch("start_storage");

    return (
        <form className={className} onSubmit={handleSubmit(submit)}>
            <div>
                <InputLabel htmlFor="name">Название река</InputLabel>
                <input
                    id="name"
                    type="text"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("name", {
                        required: "Название река не может быть пустым",
                    })}
                />
                {errors.name && <InputError message={errors.name.message} />}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="zone">Начальный уровень</InputLabel>
                <Select
                    id="zone"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("zone", {
                        required: "Выберите зону",
                    })}
                >
                    <option value="">Выберите зону</option>
                    {zones.map((zone: any) => (
                        <option value={zone.id} key={zone.id}>
                            {zone.name}
                        </option>
                    ))}
                </Select>
                {errors.zone && <InputError message={errors.zone.message} />}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="start_level">Начальный уровень</InputLabel>
                <input
                    id="start_level"
                    type="number"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("start_level", {
                        required: "Введите начальный уровень",
                    })}
                />
                {errors.start_level && (
                    <InputError message={errors.start_level.message} />
                )}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="level_count">
                    Количество уровней
                </InputLabel>
                <input
                    id="level_count"
                    type="number"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("level_count", {
                        required: "Введите количество уровней",
                    })}
                />
                {errors.level_count && (
                    <InputError message={errors.level_count.message} />
                )}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="start_storage">
                    Начальная ячейка
                </InputLabel>
                <input
                    id="start_storage"
                    type="number"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("start_storage", {
                        required: "Введите начальную ячейку",
                    })}
                />
                {errors.start_storage && (
                    <InputError message={errors.start_storage.message} />
                )}
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="finish_storage">
                    Конечная ячейка
                </InputLabel>
                <input
                    id="finish_storage"
                    type="number"
                    className="w-full mt-1 rounded-md border-gray-300 outline-none shadow-xs focus:outline-none focus:ring-0 focus:border-gray-500 transition duration-300"
                    {...register("finish_storage", {
                        required: "Введите конечную ячейку",
                        validate: (value) =>
                            value >= startStorage ||
                            "Конечная ячейка не может быть меньше начальной",
                    })}
                />
                {errors.finish_storage && (
                    <InputError message={errors.finish_storage.message} />
                )}
            </div>
            <div className="mt-4 space-x-4">
                <PrimaryButton>Создать</PrimaryButton>
                <SecondaryButton onClick={resetForm}>Очистить</SecondaryButton>
            </div>
        </form>
    );
}
