import Image from "next/image"
import galleryGangUp from "@/features/home/images/gallery-gangup.webp"
import Link from "next/link"

export const GalleryExample = () => {

    return (
        <section className="flex h-96 w-screen items-center bg-gray-800">
            <div className="flex flex-row mr-20 ml-20">
                <div id="image" className="">
                    <Image
                        src={galleryGangUp}
                        width={400} height={400}
                        alt='gallery_image'
                    />
                </div>
                <div className="ml-20 text-center">
                    <header className="font-protest text-4xl text-green-400">No A.I. Gallery of Art</header>
                    <p className="text-white">A showcase of art by some of our favorites.</p>
                    <p className="text-white">Profile your work so somebody can buy it!</p>
                    <div id="link_text" className="bg-green-400">
                    <Link href="/">
                        <label className="font-protest mr-auto ml-auto mt-4 text-black">Gallery Art</label>
                    </Link>
                </div>
                </div>
            </div>
        </section>
    )
}