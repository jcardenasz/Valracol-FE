"use client";

import { Card } from "flowbite-react";

interface CardProps {}

const CardComponent: React.FC<CardProps> = () => {
    return (
        <Card
            className="max-w-sm hover:scale-105 size-72"
            imgAlt="imagen producto"
            imgSrc="/images/ejemploValvula.webp"
        >
            <a href="#">
                {/* Product Title */}
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Válvulas y racores de Colombia
                </h5>
            </a>
            <a href="#">
                {/* Brand */}
                <p className="mt-1 text-red-600 hover:text-valracol-letter-hover dark:text-white-400">
                    Valracol
                </p>
            </a>
            <div className="flex items-center justify-between">
                {/* Price */}
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Agregar al carrito
                </a>
            </div>
        </Card>
    );
}
export default CardComponent;