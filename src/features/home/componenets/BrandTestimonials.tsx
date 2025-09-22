import Image from "next/image"
import Link from "next/link"

export const BrandTestimonials = ({
    testimonial,
}: {
    testimonial: {
        id: string
        image: string
        stars: string
        description: string
        label: string
        url: string
    }
}) => {

    return (
        <section className="">
            <Link href="/">
                <div id="card-container"  className="h-60 w-60 grid grid-cols-1 text-center rounded-lg shadow-lg bg-white">
                    <div id="image" className="mr-auto ml-auto p-2">
                    <div id="image">
                        <Image
                            src={testimonial.image}
                            width={100} height={100}
                            alt="Splash-Image"
                        />
                    </div>
                    </div>
                    <div id="stars" className="text-xl">
                        {testimonial.description}
                    </div>
                    <div id="paragraph">
                        {testimonial.label}
                    </div>
                    <div id="url">
                        {testimonial.url}
                    </div>
                </div>
            </Link>
        </section>
    )
}