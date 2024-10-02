import React from "react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
    const Map = useMemo(() => dynamic(
        () => import('./components/molecules/map'),
        {
            loading: () => <p>¡Se está cargando un mapa!</p>,
            ssr: false
        }
    ), []);

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 bg-white text-black">
            <main className="flex flex-col gap-8 items-center sm:items-start">
                <h1 className="text-4xl font-bold mb-8">¿Qué es Valracol?</h1>
                <section className="mb-8">
                    <p className="text-lg">
                        Valracol es una empresa dedicada a proporcionar soluciones innovadoras y de alta calidad que satisfacen las necesidades de nuestros clientes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Galería de Imágenes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <img src="/logoValracol.webp" alt="Testetete"/>
                        <img src="/logoValracol.webp" alt="Testetete"/>
                        <img src="/logoValracol.webp" alt="Testetete"/>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Nuestra Ubicación</h2>
                    <div className="w-full h-64 sm:mx-auto">
                        <div className="bg-white-700 mx-auto my-5 w-full h-64 sm:w-[50em] sm:h-[20em] lg:w-[70em] lg:h-[20em]">
                            <Map posix={[5.336075, -72.395415]}/>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}