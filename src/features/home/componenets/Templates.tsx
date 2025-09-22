
import templateGangUp from "@/features/home/images/template-gangup.webp"
import Image from "next/image"
import Link from "next/link"

export const TemplateBanner = () => {

    return (
        <section className="flex h-96 w-screen items-center bg-gray-800">
            <div className="flex flex-row mr-20 ml-20">
                    <div className="mr-20 text-center">
                    <header className="font-protest text-4xl text-orange-400">Templates / Clip Art</header>
                    <p className="text-white">Easily build your image with a tool-box full of head starts.</p>
                    <div id="link_text" className="bg-green-400">
                    <Link href="/">
                        <label className="font-protest mr-auto ml-auto mt-4 text-black">Templates /</label>
                    </Link>
                </div>
                </div>
                <div id="image" className="">
                    <Image
                        src={templateGangUp}
                        width={300} height={300}
                        alt='template_image'
                    />
                </div>
            </div>
        </section>
    )
}