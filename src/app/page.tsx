"use client"
import React, { lazy, Suspense } from "react";
import Loading from "@/app/loading";

const Landing = lazy(() => import("@/app/components/templates/Landing/Landing"));

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <Landing />
        </Suspense>
    );
}