import React, { FC } from "react";
import Head from "next/head";
import { Navbar } from "@/components";

interface Props {
    title?: string;
    pageDescription?: string;
    imageFullUrl?: string;
    children?: React.ReactNode;
}

export const AppLayout: FC<Props> = ({ title, pageDescription, imageFullUrl, children }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>

            <nav className='w-[1920px] xsm:w-full mx-auto'>
                <Navbar />
            </nav>

            <main>
                {children}
            </main>

            <footer>
                {/* TODO: footer */}
            </footer>
        </>
    )
};
