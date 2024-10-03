"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Spinner } from "flowbite-react";
import { Landing } from "@/pages/Landing";

// Dynamically load the Map component with SSR disabled
const Map = dynamic(() => import('./components/molecules/map'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center gap-2">
            <Spinner color="info" aria-label="Cargando mapa" />
            <p>Cargando mapa...</p>
        </div>
    ),
});

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Spinner color="info" aria-label="Cargando..." />;
    }

    return (
        <div>
            <Landing />
            <Map posix={[5.3361664710329, -72.39550987683344]} />
        </div>
    );
}
