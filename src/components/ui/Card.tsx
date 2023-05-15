import Image from "next/image";
import Link from "next/link";

interface Props {
    img: HTMLImageElement
    title: string
    buton: string
    description: string
}

export const Card: React.FC<Props> = ({ img, title, buton, description }): React.ReactElement => {

    return (<div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
        <Image alt={'#'} src={img} priority={false} />

        <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
            <h3 className="font-black text-4xl py-10">
                {title}
            </h3>

            <p className="text-xl">
                {description}
            </p>

            <Link href={'#'} className="boton group">
                {buton}
                <span className="arrow group-hover:border-blue-800 group-hover:ml-4"></span>
                <span className="arrow group-hover:border-violet-800 xl:group-hover:ml-2"></span>
            </Link>
        </div>

        <div className="dots flex justify-between p-4">
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>)
}
