import { Transition } from "@/app/components/atoms/transition/transition";
import React from "react";
import dynamic from 'next/dynamic';

// Dynamically load the MapComponent without SSR
const MapComponent = dynamic(() => import('@/app/components/molecules/map/map'), { ssr: false });

export function Landing() {
    return (
        <div>
            <div className="min-h-screen p-8 pb-20 sm:p-20 bg-white text-black">
                <main className="flex flex-col gap-8 items-center sm:items-start">
                    <Transition to={"bottom"} className={"w-full"}>
                        <h1 className="text-2xl font-bold mb-4">¿Qué es Valracol?</h1>
                    </Transition>
                    <Transition to={"right"} className={"w-full"}>
                        <section className="mb-8">
                            <p className="text-lg">
                                Valracol es una empresa Colombiana dedicada a proporcionar soluciones
                                de alta calidad en el ámbito ferretero para la industria petrolera.
                            </p>
                        </section>
                    </Transition>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Galería de Imágenes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <img src="/logoValracol.webp" alt="Testetete"/>
                            <img src="/logoValracol.webp" alt="Testetete"/>
                            <img src="/logoValracol.webp" alt="Testetete"/>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Estamos ubicados en:</h2>
                        <h2 className="text-xl font-regular mb-4">Carrera 19 #22-80 (Esquina) - Yopal, Casanare.</h2>
                        <div className="w-full h-64 sm:mx-auto">
                            <MapComponent />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Landing;