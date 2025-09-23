

import Link from "next/link";


import materialVinyl from "@/features/home/images/material-vinyl.webp"
import materialMirror from "@/features/home/images/material-mirror.webp"
import materialHologram from "@/features/home/images/material-holographic.webp"
import materialGlitter from "@/features/home/images/material-glitter.webp"

import porscheLogo from "@/features/home/images/porsche-logo.jpg"
import coachellaLogo from "@/features/home/images/coachella-logo.png"
import squareLA from "@/features/home/images/square-la.jpeg"
import foxLogo from "@/features/home/images/fox-logo.jpg"

import { Splash } from "@/features/home/componenets/Splash";
import { GalleryExample } from "@/features/home/componenets/GalleryExamples";
import { TemplateBanner } from "@/features/home/componenets/Templates";
import { MaterialCard } from "@/features/home/componenets/MaterialCard";
import { BrandTestimonials } from "@/features/home/componenets/BrandTestimonials";

import { Footer } from "@/features/home/componenets/Footer";

import { Protest_Strike } from "next/font/google"


const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

    const materialItems = [
    {
      id: "0",
      image: materialVinyl.src,
      header: "vinyl",
      description: "Best Seller"
    },
    {
      id: "1",
      image: materialHologram.src,
      header: "Holographic",
      description: "Eye catching!"
    },
      {
      id: "2",
      image: materialMirror.src,
      header: "Mirror",
      description: "So shiny"
    },
      {
      id: "3",
      image: materialGlitter.src,
      header: "Glitter",
      description: "Sprkling spots"
    }
  ]

  const testimonialData = [
    {
        id: "0",
        image: porscheLogo.src,
        stars: "Stars-0",
        description: "Description-0",
        label: "Label-0",
        url: "URL-0"
    },
        {
        id: "1",
        image: squareLA.src,
        stars: "Stars-1",
        description: "Description-1",
        label: "Label-1",
        url: "URL-1"
    },
        {
        id: "2",
        image: coachellaLogo.src,
        stars: "Stars-2",
        description: "Description-2",
        label: "Label-2",
        url: "URL-2"
    },
        {
        id: "4",
        image: foxLogo.src,
        stars: "Stars-4",
        description: "Description-4",
        label: "Label-4",
        url: "URL-4"
    }
]

export default function Home() {
  return (
<main className="grid grid-cols-1 bg-slate-200">
          <Splash headline="Print Custom Stickers and Labels!"
              paragraph="Make your own custom stickers and labels. Express delivery as fast as 2-4 business days. Get an instant proof and free shipping!"
              button_text="Make a custom sticker"
              link_text="All sticker products."/>

          <div>
            <GalleryExample />
          </div>

          <div className="mt-2">
            <TemplateBanner />
          </div>

      <div id="material-selection" className="mt-6 mr-auto ml-auto">
          <div>
            <p className={`text-center text-4xl ${protestFont.className}`}>
                Select sticker material
            </p>
            <p className="text-center">
              Our materials have been hand chosen by our team to ensure the highest quality, here are some favorites.
            </p>
          </div>
          <div className="p-6 gap-6 flex flex-row">
            {materialItems.map((item) => {
              return <div key={item.id}>
                        <MaterialCard material={item} />
                      </div>
                    })}
          </div>
                <div id="custom_link" className="w-60 h-10 mr-auto ml-auto mt-6 grid items-center justify-items-center rounded-lg bg-black">
                    <Link href="/" className={`text-2xl text-white ${protestFont.className}`}>
                        See all materials
                    </Link>
                </div>
      </div>

      <div id="testimonials" className="mt-6 mr-auto ml-auto text-center">
        <label className="font-protest  text-4xl">Brand Testimonials</label>
        <div className="mr-auto ml-auto mt-4 p-6 gap-6 flex flex-row">
            {testimonialData.map((item) => {
              return <div key={item.id}>
                        <BrandTestimonials testimonial={item} />
                      </div>
                  })}
        </div>
      </div>

      <div id="footer" className="mt-6">
        <Footer />
      </div>
</main> 
  );
}
