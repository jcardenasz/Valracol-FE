import { Transition } from "@/app/components/atoms/transition/transition";
import React from "react";
import dynamic from 'next/dynamic';

const CarouselComponent = dynamic(() => import('@/app/components/atoms/carrousel/carouselComponent'), { ssr: false });
const MapComponent = dynamic(() => import('@/app/components/molecules/map/map'), { ssr: false });

const img = [
    "/images/valvulas.webp",
    "/images/valvulas.webp",
    "/images/valvulas.webp",
    "/images/valvulas.webp",
    "/images/valvulas.webp"
];

export function Landing() {
    return (
        <div>
            <div className="min-h-screen p-8 pb-20 sm:p-20 text-black">
                <main className="flex flex-col gap-8 items-center sm:items-start">
                    <div className="bg-white bg-opacity-50 rounded-2xl">
                        <Transition to={"bottom"} className={"w-full"}>
                            <div className="text-center">
                                <h1 className="p-3 text-2xl font-bold mb-4">¿Qué es Valracol?</h1>
                            </div>
                        </Transition>
                        <Transition to={"right"} className={"w-full"}>
                            <section className="mb-4">
                                <div className="px-3 sm:p-8 text-justify">
                                    <p className="text-lg text-justify">
                                        Valracol es una empresa Colombiana dedicada a proporcionar soluciones
                                        de alta calidad en el ámbito ferretero para la industria petrolera.
                                        Brindamos servicio a todo tipo de generadores.
                                    </p>
                                </div>
                            </section>
                        </Transition>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Galería de Imágenes</h2>
                        <div className="flex w-full h-full sm:w-3/4 lg:w-full mx-auto">
                            <CarouselComponent images={img} />
                        </div>
                    </section>

                    <section className="mb-8 w-full">
                        <h2 className="text-2xl font-semibold mb-4">Estamos ubicados en:</h2>
                        <h2 className="text-xl font-regular mb-4">Carrera 19 #22-80 (Esquina) - Yopal, Casanare.</h2>
                        <div className="w-full h-full justify-center items-center">
                            <MapComponent />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Landing;