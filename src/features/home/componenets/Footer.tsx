
import { Button } from "@/components/ui/button";
import { Protest_Strike } from "next/font/google";
import Link from "next/link"

import { FaApplePay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

import { FaRegCopyright } from "react-icons/fa";

import { Checkbox } from "@/components/ui/checkbox"

const protestFont = Protest_Strike({
     subsets: ["latin"],
     weight: "400",
})

export const Footer = () => {

    return (
        <section className=" w-screen h-auto bg-black">
        <div id="footer-continer" className="grid grid-cols-2">
            <div id="links" className="ml-20 w-96 mt-6 grid grid-cols-3">
                <div id="usefull-list" className="grid grids-cols-3 text-white">
                    <label className="text-lg">
                        Useful links
                    </label>
                    <ul className="mt-2">
                        <li><Link href="/">Usages</Link></li>
                        <li><Link href="/">Add-Ons</Link></li>
                        <li><Link href="/">Sticker Packs</Link></li>
                        <li><Link href="/">Order Samples</Link></li>
                        <li><Link href="/">Shop</Link></li>
                        <li><Link href="/">Blog</Link></li>
                    </ul>
                </div>
                <div id="support-list" className="text-white">
                    <label className="text-lg">
                        Support
                    </label>
                    <ul className="mt-2">
                        <li><Link href="/">Contact us</Link></li>
                        <li><Link href="/">Quote</Link></li>
                        <li><Link href="/">FAQs</Link></li>
                        <li><Link href="/">How to&apos;s</Link></li>
                        <li><Link href="/">Shipping</Link></li>
                        <li><Link href="/">Payments</Link></li>
                    </ul>
                </div>
                <div id="company-list" className="text-white">
                    <label className="text-lg">
                        Company
                    </label>
                    <ul className="mt-2">
                        <li><Link href="/">About us</Link></li>
                        <li><Link href="/">Legal</Link></li>
                        <li><Link href="/">Reviews</Link></li>
                        <li><Link href="/">Press</Link></li>
                        <li><Link href="/">Cookies</Link></li>
                        <li><Link href="/">Accessibility</Link></li>
                    </ul>
                </div>
                <div id="Pay-logos" className="flex flex-row gap-4 p-2 mr-auto ml-auto text-white">
                    <FaApplePay className="text-5xl" />
                    <FaCcPaypal className="text-5xl" />
                    <FaCcVisa className="text-5xl" />
                    <FaCcMastercard className="text-5xl" />
                </div>
            </div>

            <div id="stay-connected" className="grid grid-cols-1 mt-6 mr-20">
                <p className={`text-white text-xl ${protestFont.className}`}>Are you a Punk?... Stay connected!</p>
                <p className="text-white">Sign up to our email list for insider deals, tips and inspiration.</p>
                <div id="consent" className="flex flex-row">
                    <Checkbox className="mr-2 bg-white"/>
                    <p className="text-sm text-white">I consent that Decal-Punk Inc may process my personal data for the purpose of direct marketing. I can unsubscribe anytime via link in email and read details in Decal-Punk&apos;s Privacy Policy. </p>
                </div>
                <div id="buttons" className="flex flex-row  mt-6  gap-4">
                    <div id="email_link" className="w-60 h-10   grid items-center justify-items-center rounded-lg bg-white">
                        <Link href="/" className={`text-2xl text-black`}>
                            Email
                        </Link>
                    </div>
                    <div id="email_link" className="w-60 h-10   grid items-center justify-items-center rounded-lg bg-amber-300">
                        <Link href="/" className={`text-2xl text-black ${protestFont.className}`}>
                            Subscribe
                        </Link>
                    </div>
                    <Button>Subscribe</Button>
                </div>
                <ul className='flex flex-row gap-4 justify-center text-white'>
                    <FaInstagram className="text-3xl"/>
                    <FaPinterest className="text-3xl"/>
                    <FaXTwitter className="text-3xl"/>
                    <FaYoutube className="text-3xl"/>
                </ul>
            </div>
        </div>
            <div id="copywrite" className="p-4 gap-2 items-center justify-center flex flex-row text-white">
                <FaRegCopyright />
                <p>Decal-Punk 2025</p>
            </div>
        </section>
    )
}