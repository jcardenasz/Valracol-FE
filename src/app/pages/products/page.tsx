"use client";
import CardComponent from "@/app/components/atoms/card/cardComponent";

export default function products() {
    return (
        <div className="min-h-screen pb-20 sm:p-8 bg-white text-black">
            <div className="flex items-center align-middle mb-4">
                <p className="mr-2 w-full text-lg">Aquí encontrarás los productos que buscas. ¿Deseas buscar más productos?</p>
                <input
                    type="text"
                    placeholder="Buscar productos, marcas..."
                    value={""}
                    onChange={() => {
                    }}
                    className="p-2 border border-gray-300 rounded-md w-full hover:border-gray-500 focus:border-gray-500 focus:outline-none shadow-md"
                />
            </div>
            <div>
                <hr className="my-4 border-gray-300"/>
            </div>
            <div className="flex flex-wrap gap-4">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </div>
    )
}