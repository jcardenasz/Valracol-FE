import type {Config} from "tailwindcss";
/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content()
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'valracol-red': '#8e2222',
                'valracol-dark': '#280a0a',
                'valracol-blue': '#003b5c',
                'valracol-footer-red': '#441010',
                'valracol-letter-hover': '#e76d6d'
            },
        },
    },
    plugins: [
        flowbite.plugin()
    ],
};
export default config;
