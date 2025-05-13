"use client"
import CardComponent from "@/app/components/atoms/card/cardComponent";
import { mockItems20 } from "@/app/components/atoms/mockItems/mockItems";
import { Key } from "react";

export default function products() {
    return (
        <div className="min-h-screen pb-20 sm:p-8 text-black">
            <div className="flex items-center align-middle mb-4 bg-white bg-opacity-50 rounded-2xl px-3 py-2">
                <p className="text-xs sm:text-sm md:text-lg py-2 mr-2 w-full">Aquí encontrarás los productos que buscas. ¿Deseas buscar más productos?</p>
                <input
                    type="text"
                    placeholder="Buscar productos, marcas..."
                    value={""}
                    onChange={() => {}}
                    className="p-2 border border-gray-300 rounded-md w-full hover:border-gray-500 focus:border-gray-500 focus:outline-none shadow-md"
                />
            </div>
            <div>
                <hr className="my-4 border-gray-300"/>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
                {mockItems20.map((item: { title: string; brand: string; price: number; imgSrc: string; }, index: Key | null | undefined) => (
                    <CardComponent
                        key={index}
                        title={item.title}
                        brand={item.brand}
                        price={item.price}
                        imgSrc={item.imgSrc}
                    />
                ))}
            </div>
        </div>
    )
}