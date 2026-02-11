import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
    title: "Runway",
    description: "About\n" +
        "A financial resilience simulator",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div className="container">
            <Navbar/>
            <main>{children}</main>
        </div>
        </body>
        </html>
    );
}
