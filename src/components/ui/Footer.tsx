import Link from "next/link";

export const Footer: React.FC = (): React.ReactElement => {
    return (
        <>
            <section className='bg-black'>
                <div className='bg-wave-pattern bg-repeat-x h-6 relative -top-4' />
                <div className='container mx-auto text-center py-10 w-2/3'>

                    <div className="pb-5">
                        <Link href={'#'} className='boton group'>
                            Customer Support
                            <span className="arrow arrow-group" />
                        </Link>
                    </div>

                    <div className="text-white">
                        <p className="py-2">*Additional systems and/or accessories may be required for apply mode.</p>
                        <p className="py-2">Not available in all countries. Internet access required for online features. A account is required to receive and redeem points. Terms apply-online.</p>
                        <p className="py-2">©2013-2023 brandev and bran.dev are trademarks.</p>
                    </div>

                </div>
            </section>
        </>)
}
