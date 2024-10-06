import React from 'react';
import {Spinner} from "flowbite-react";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Spinner color="info" aria-label="Loading" size="xl"/>
            <p>Loading...</p>
        </div>
    )
}