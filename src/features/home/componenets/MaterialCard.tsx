import Image from "next/image"
import Link from "next/link"
import { Protest_Strike } from "next/font/google"

const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

export const MaterialCard = ({
    material,
}: {
    material: {
    id: string
    image: string
    header: string
    description: string
    },

}) => {

    return (
        <section>
                <Link href="/">
                    <div id="card-container" className="h-44 w-44 p-2 grid grid-cols-1 text-center rounded-lg shadow-lg bg-white">
                        <div id="image" className="mr-auto ml-auto">
                            <Image
                                src={material.image}
                                width={100} height={100}
                            alt='material_image'
                            />
                        </div>
                        <div id="headline" className={`text-xl ${protestFont.className}`}>
                            {material.header}
                        </div>
                        <div id="paragraph">
                            {material.description}
                        </div>
                    </div>
                </Link>
        </section>
    )
}