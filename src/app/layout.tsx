import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarComponent from "@/app/components/organisms/navbar/navbar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Valracol - Página web",
    description: "Valracol es proveedora de suministros y dotaciones",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logoValracol.png"/>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <NavbarComponent/>
            {children}
            </body>
        </html>
    );
}
