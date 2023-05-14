import Link from "next/link";
import Image from "next/image";
import imageHome2 from '@/assets/img/abstract.jpg';
import imageHome from '@/assets/img/abstract2.jpg';
import { AppLayout } from "@/components";

export default function Home() {
  return (
    <AppLayout>
      <section className="header">
        <Image alt={'#'} src={imageHome} priority={true} style={{ width: 'auto', height: 'auto', display: 'block', maxWidth: '100%' }} />
      </section>

      <section >
        <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-2" ></div>
        <div className="bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
          <Link href={'#'} className="inline-block py-3 px-16 bg-blue-950 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-blue-200 hover:bg-blue-200 hover:text-blue-950 transition duration-200">Buy Now</Link>
          <Link href={'#'} className="inline-block py-3 px-16 bg-blue-600 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-blue-200 hover:bg-blue-200 hover:text-blue-600 transition duration-200">Learn More</Link>
        </div>

        <div className="bg-wave-pattern bg-repeat-x h-6 relative top-2"></div>
      </section>

      <section className="bg-pattern-characters-blue py-28">
        <div className="lg:container mx-auto md:flex gap-5 md:w-full p-3">
          <div className="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 max-auto">
            <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
              {/* <div className="cover bg-black"> */}
              <Image alt={'#'} src={imageHome2} priority={false} />
              {/* </div> */}
            </div>
          </div>

          <div className="right">
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
