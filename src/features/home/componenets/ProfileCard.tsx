import Image from "next/image"
import Link from "next/link"
import { Protest_Strike } from "next/font/google"

const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

export const ProfileCard = ({
    profile,
}: {
    profile: {
        id: string
        image: string
        header: string
        description: string
    }

}) => {

    return (
        <Link href="/">
            <div id="card-container" key={profile.id} className="h-60 w-60 grid grid-cols-1 text-center rounded-lg shadow-lg bg-white">
                <div id="image" className="mr-auto ml-auto p-2">
                    <Image
                        src={profile.image}
                        width={100} height={100}
                      alt='promotion_image'
                      />
                </div>
                <div id="headlind" className={`text-xl ${protestFont.className}`}>
                    {profile.header}
                </div>
                <div id="paragraph">
                    {profile.description}
                </div>
            </div>
        </Link>
    )
}