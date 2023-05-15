import Link from "next/link";
import Image from "next/image";
import type { NextPage } from 'next'
import { AppLayout, Card } from "@/components";
import { imgCard1, imgCard2, imgCat, imgHome, imgcard3, imgHome2 } from "@/helpers";

const Home: NextPage = (): React.ReactElement => {
  return (
    <AppLayout>
      <section className="header">
        <Image
          alt={'#'}
          src={imgHome2}
          priority={true}
          style={{ width: 'auto', height: 'auto', display: 'block', maxWidth: '100%' }}
        />
      </section>

      <section >
        <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-2" />
        <div className="bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
          <Link href={'#'} className="inline-block py-3 px-16 bg-blue-950 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-blue-200 hover:bg-blue-200 hover:text-blue-950 transition duration-200">Buy Now</Link>
          <Link href={'#'} className="inline-block py-3 px-16 bg-blue-600 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-blue-200 hover:bg-blue-200 hover:text-blue-600 transition duration-200">Learn More</Link>
        </div>
        <div className="bg-wave-pattern bg-repeat-x h-6 relative top-2" />
      </section>

      <section className="bg-pattern-characters-blue py-28">
        <div className="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3">
          <div className="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">
            <Card
              img={imgCard1 as HTMLImageElement}
              title="Work Togeter"
              description="Work with your friends and family."
              buton="Apply"
            />
          </div>

          <div className="right w-5/6 md:w-1/2 text-center mx-auto">
            <h2 className="font-black text-white text-6xl py-8">
              Available now
            </h2>

            <p className="font-bold text-white  text-2xl mx-auto py-10 w-4/5">
              The new generation of developers
            </p>

            <p className="text-white mx-auto w-4/5">
              is waiting for you
            </p>

            <Card
              img={imgCard2 as HTMLImageElement}
              title="Work Togeter"
              description="Work with your friends and family."
              buton="Apply"
            />
          </div>
        </div>

        <div className="footer text-center flex justify-center gap-9 pt-10">
          <Image
            alt={'#'}
            src={imgCat}
            priority={true}
            style={{ width: 'auto', height: 'auto', display: 'block', maxWidth: '100%' }}
          />
          {/* <img src='img/img.gif' alt='img' className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]' /> */}
          {/* <img src='img/img.gif' alt='img' className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block'/> */}
        </div>
      </section>

      <section className="bg-yellow-dots">
        <div className="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>
        <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
          <div className="left xl:w-1/3 lg:w-1/2 p-5">

            <h3 className="text-violet-900-900 font-black  xsm:text-3xl sm:text-4xl">
              Transformation Center
            </h3>

            <p className="py-4 text-xl">
              become a fantastic new developer
            </p>

            <p>
              <a href="#" className="xl:text-2xl my-4 inline-block py-2 px-16 bg-violet-700 text-white font-black border-transparent border-8 rounded-3xl hover:border-violet-100 hover:bg-white hover:text-black transition duration-200 group">
                Apply!
                <span className="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-violet-700 xl:group-hover:ml-4"></span>
              </a>
            </p>

          </div>

          <div className="right xl:w-1/3 lg:w-1/2">
            <Image src={imgcard3} className="md:w-full" alt="" />
          </div>
        </div>
      </section>
    </AppLayout>
  )
}

export default Home